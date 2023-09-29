from flask import Flask, render_template

app = Flask(__name__)

# home page render
@app.route('/')
def home():
    return render_template('home.html')

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
