# Merge Conflict Marauders - Wellfare Project Team 9

## Challenge Statement

How can technology help to create a seamless in-person customer experience, enabling shoppers to view and interact with their personalized pricing at the shelf and at point of sale, enroll in a membership program and share feedback data with Wellfare? Consider ways technology can increase discovery and sales, create a feedback dialouge between customers and staff, and encourage and incentive healthy choices.

### Minimum Viable Product Solution

The current working implementation is to create both a customer and cashier facing interface. The application for a customer will be directed towards a landing page that greets the customer with Wellfare's ideology and goals. The customer also has the option to sign up for the membership program. Which will use SNAP, EBT or public housing validation to ensure that the customer abides by Wellfare's guidlines. This will add the customer to Wellfare's system and allow the user to get discounted prices if eligible. For the cashier portal, they will have the ability to process the customer as a guest or member which will automatically calculate the discounted price.

The application allows and end-to-end cycle of customer to cashier friendly user experience that ensures safety, security and accesibility.

### Technologies Used

- React
- Python
- Flask
- MongoDB

### How to Run

1. `git clone https://github.com/cfgdelaware23/Team-9.git`
2. `cd Team-9` in Terminal
3. navigate to client folder and run `npm install`
4. Once packages have been installed run `npm start` to run front-end
5. Navigate back to server and run `flask run`
