# Node.js & MySQL

### Overview

This application has the capability to handle user orders. Once user input is submitted the application will connect with an sql database to pull down data about the requested product. In addition the application will update the database to reflect the depleted stock.

Technologies used -
SQL - used to create bamazon database, which will hold our data.
Inquierer - technology that allows us to interact with the user.  
Node - The spine of our application that is enables us to connect with our database and with our user's requst.

## Application Walkthrough

- MySQL bamazon database including products table created in MySQL Workbench
  <img src="assets/images/bamazon_img1.PNG">

- Inital connection with our database using our application
  <img src="assets/images/bamazon_img2.PNG">

- Using Inquierer the applications interacts with the user. Asking which product id they would be intrested in buying and how many units would they be willing to purchase
  <img src="assets/images/bamazon_img3.PNG">