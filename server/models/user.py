from pymongo.collection import ObjectId

class User:
    def __init__(self, first_name, last_name, snap_ebt_number, email=None, age=None, household_size=None):
        self.membership_id = str(ObjectId())  # this will generate the unique ID
        self.first_name = first_name
        self.last_name = last_name
        self.snap_ebt_number = snap_ebt_number
        self.email = email
        self.age = age
        self.household_size = household_size
        self.qualify_discount = self.check_discount()  
        self.purchase_history = []

    def check_discount(self):
        # where we can incorporate the API
        pass

    def add_purchase(self, purchase):
        self.purchase_history.append(purchase)
