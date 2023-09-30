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
        user.pop('_id', None)  # Remove the _id field as it's not JSON serializable
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404

@app.route('/add_purchase/<id>', methods=['POST'])
def add_purchase(id):
    user = mongo.db.users.find_one({"membership_id": id})
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    if 'total' not in data or 'item' not in data:
        return jsonify({"error": "Missing total or item in the request"}), 400

    purchase_date = datetime.datetime.now()
    purchase = Purchase(id, purchase_date, data['total'], data['item'])

    # Add new purchase to a user's purchase history
    mongo.db.users.update_one(
        {"membership_id": id},
        {"$push": {"purchase_history": purchase.__dict__}}
    )
    return jsonify({"message": "Purchase added successfully"}), 201

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.json
    required_fields = ['firstName', 'lastName', 'address']
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required field(s)"}), 400

    user = User(data['firstName'], data['lastName'], data['address'], 
                data.get('snap'), data.get('phoneNumber'), data.get('email'), data.get('age'), data.get('familySize'))

    existing_user = mongo.db.users.find_one({"user_hash": user.user_hash})
    if existing_user:
        return jsonify({"error": "User already exists"}), 400

    mongo.db.users.insert_one(user.__dict__)
    return jsonify({"message": "User added successfully", "membership_id": user.membership_id}), 201

@app.route('/check_qualify/<membership_id>', methods=['GET'])
def check_qualify(membership_id):
    user = mongo.db.users.find_one({"membership_id": membership_id})
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    qualifies = user.get('qualify_discount', False)
    return jsonify({"qualifies": qualifies, "membership_id": membership_id})

if __name__ == '__main__':
    app.run(debug=True)
