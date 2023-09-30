import uuid
import random
import hashlib

class User:
    def __init__(self, firstName, lastName, address, snap=None, phoneNumber=None, email=None, age=None, familySize=None):
        self.userID = str(uuid.uuid4())  # Primary Key
        self.membership_id = self.generate_membership_id()  # 6-digit unique ID
        self.firstName = firstName
        self.lastName = lastName
        self.address = address
        self.snap = snap
        self.phoneNumber = phoneNumber
        self.email = email
        self.age = age
        self.purchase_history = []
        self.familySize = familySize
        self.qualify_discount = self.check_qualify_discount()
        self.user_hash = hashlib.sha256((firstName + lastName + address).encode()).hexdigest()

    def generate_membership_id(self):
        # Generates a random 6-digit ID. Later I will ensure it is unique in our database
        return str(random.randint(100000, 999999))
    
    def add_purchase(self, purchase):
        self.purchase_history.append(purchase)

    def check_qualify_discount(self):
        if self.snap or (self.familySize and int(self.familySize) > 4):
            return True
        
        return False