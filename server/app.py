from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from models.user import User
from models.purchase import Purchase
from models.feedback import Feedback  
import datetime
import os
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin

load_dotenv()

app = Flask(__name__)
CORS(app)

cors = CORS(app, resource={
    r"/*": {
        "origins": "*"
    }
})

# MongoDB configuration
api_key = os.getenv("API_KEY")
app.config["MONGO_URI"] = api_key
mongo = PyMongo(app)


@app.route('/users', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    user_list = [user for user in users]
    for user in user_list:
        user.pop('_id', None)
    return jsonify(user_list)


@app.route('/user/<id>', methods=['GET'])
def get_user(id):
    user = mongo.db.users.find_one({"membership_id": id})
    if user:
        # Remove the _id field as it's not JSON serializable
        user.pop('_id', None)
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404


@app.route('/add_user', methods=['POST'])
@cross_origin(origins="*")
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


def get_discounted_price_and_savings(original_price, qualifies_for_discount):
    discount_rate = 0.6  # __% discount
    if qualifies_for_discount:
        discounted_price = original_price * (1 - discount_rate)
        savings = original_price - discounted_price
        return round(discounted_price, 2), round(savings, 2)
    else:
        return original_price, 0.0


@app.route('/add_purchase/<id>', methods=['POST'])
def add_purchase(id):
    user = mongo.db.users.find_one({"membership_id": id})
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    if 'total' not in data or 'item' not in data:
        return jsonify({"error": "Missing total or item in the request"}), 400

    qualifies_for_discount = user.get('qualify_discount', False)
    original_price = data['total']
    discounted_price, savings = get_discounted_price_and_savings(
        original_price, qualifies_for_discount)

    purchase_date = datetime.datetime.now()
    purchase = Purchase(id, purchase_date, discounted_price, data['item'])

    mongo.db.users.update_one(
        {"membership_id": id},
        {"$push": {"purchase_history": purchase.__dict__}}
    )
    return jsonify({
        "message": "Purchase added successfully",
        "original_price": original_price,
        "discounted_price": discounted_price,
        "savings": savings
    }), 201

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    required_fields = ['like', 'notLike', 'rating', 'suggestions']
    
    if not all(field in data for field in required_fields):
        response = {
            "error": "Missing required field(s)",
            "status_code": 400
        }
        return jsonify(response), 400

    feedback = Feedback(data['like'], data['notLike'], data['rating'], data['suggestions'])

    mongo.db.feedback.insert_one(feedback.__dict__)

    response = {
        "message": "Feedback submitted successfully",
        "status_code": 201
    }
    return jsonify(response), 201

if __name__ == '__main__':
    app.run(debug=True)
