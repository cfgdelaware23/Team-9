import uuid

class User:
    def __init__(self, first_name, last_name, address, snap_ebt_number=None, email=None, age=None, household_size=None):
        self.membership_id = str(uuid.uuid4())  # Generate unique membership ID
        self.first_name = first_name
        self.last_name = last_name
        self.address = address
        self.snap_ebt_number = snap_ebt_number  
        self.email = email  
        self.age = age  
        self.household_size = household_size  
        self.qualify_discount = False  
        self.purchase_history = []
        self.user_hash = ""  

    def add_purchase(self, purchase):
        self.purchase_history.append(purchase)

    def set_user_hash(self, user_hash):
        self.user_hash = user_hash
