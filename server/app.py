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

# @app.route('/users', methods=['GET'])
# def get_users():
#     users = mongo.db.users.find()
#     user_list = [user for user in users]
#     return jsonify(user_list)

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

@app.route('/add_purchase/<id>', methods=['POST'])
def add_purchase(id):
    user = mongo.db.users.find_one({"membership_id": id})
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    purchase_date = datetime.datetime.now()
    purchase = Purchase(id, purchase_date, data['total'], data['item'])

    # Add new purchase to a user's purchase history
    mongo.db.users.update_one(
        {"membership_id": id},
        {"$push": {"purchase_history": purchase.__dict__}}
    )

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.json
    unique_info = data['firstName'] + data['lastName'] + data['address']
    user_hash = hashlib.sha256(unique_info.encode()).hexdigest()

    existing_user = mongo.db.users.find_one({"user_hash": user_hash})
    if existing_user:
        return jsonify({"error": "User already exists"}), 400

    user = User(data['firstName'], data['lastName'], data['address'], 
                data.get('snap'), data.get('phoneNumber'), data.get('email'), data.get('age'), data.get('familySize'))
    user.user_hash = user_hash

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
