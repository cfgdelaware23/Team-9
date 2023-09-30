from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from models.user import User
from models.purchase import Purchase
import hashlib
import datetime

app = Flask(__name__)

# MongoDB configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/mydatabase"
mongo = PyMongo(app)

@app.route('/users', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    user_list = [user for user in users]
    return jsonify(user_list)

@app.route('/user/<id>', methods=['GET'])
def get_user(id):
    user = mongo.db.users.find_one({"membership_id": id})
    if user:
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404

@app.route('/user/<id>/purchases', methods=['GET'])
def get_user_purchases(id):
    user = mongo.db.users.find_one({"membership_id": id})
    if user:
        return jsonify(user.get('purchase_history', []))
    else:
        return jsonify({"error": "User not found"}), 404

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.json
    
    # creates the hash from a user's first and last name, and address
    unique_info = data['first_name'] + data['last_name'] + data['address']
    user_hash = hashlib.sha256(unique_info.encode()).hexdigest()

    # Check if user with the same hash already exists
    existing_user = mongo.db.users.find_one({"user_hash": user_hash})
    if existing_user:
        return jsonify({"error": "User already exists"}), 400

    user = User(data['first_name'], data['last_name'], data['address'], 
                data.get('snap_ebt_number'), data.get('email'), data.get('age'), data.get('household_size'))
    
    user.set_user_hash(user_hash)
    
    purchase_date = datetime.datetime.now()
    purchase = Purchase(user.membership_id, purchase_date, 20.5, "Item Name")
    user.add_purchase(purchase.__dict__)

    mongo.db.users.insert_one(user.__dict__)
    return jsonify({"message": "User added successfully", "membership_id": user.membership_id}), 201

@app.route('/user/<id>/qualify', methods=['GET'])
def check_qualify(id):
    user = mongo.db.users.find_one({"membership_id": id})
    if user:
        return jsonify({"qualify_discount": user.get('qualify_discount', False)})
    else:
        return jsonify({"error": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
