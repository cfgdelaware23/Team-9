from flask import Flask, render_template, request, redirect, url_for
from flask_pymongo import PyMongo
import datetime
from models.user import User  
from models.purchase import Purchase  

app = Flask(__name__)

# MongoDB configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/mydatabase"
mongo = PyMongo(app)

# Routes
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/add_user', methods=['POST'])
def add_user():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        snap_ebt_number = request.form['snap_ebt_number']
        email = request.form.get('email')  
        age = request.form.get('age')
        household_size = request.form.get('household_size')

        user = User(first_name, last_name, snap_ebt_number, email, age, household_size)

        # Example of adding a purchase to the user
        # purchase_date = datetime.datetime.now()
        # purchase = Purchase(user.membership_id, purchase_date, 20.5, "Item Name")
        # user.add_purchase(purchase.__dict__)

        mongo.db.users.insert_one(user.__dict__)

        return redirect(url_for('home'))

# application form render
@app.route('/application')
def application():
    return render_template('application.html')

# cashier checkout page render
@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

# admin (cashier) page render
@app.route('/admin')
def admin():
    return render_template('admin.html')

# main user page render
@app.route('/user')
def user():
    return render_template('user.html')

if __name__ == '__main__':
    app.run(debug=True)
