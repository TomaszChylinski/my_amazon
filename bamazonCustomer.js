// dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  //connection info
  port: 3306,
  user: "root",
  password: "Jacky",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  //test connection
  console.log(
    "your connection id is the following ",
    connection.threadId + "\n"
  );
  userActions();
});

function userActions() {
  var itemId = [];
  var query = "SELECT item_id FROM products";
  connection.query(query, function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      itemId.push(res[i].item_id);
    }
    inquirer
      .prompt([
        {
          name: "itemId",
          type: "list",
          message: "Which product Id are you intrested in buying?",
          choices: itemId
        },
        {
          name: "purchase",
          type: "input",
          message: "How many units would you like to buy: "
        }
      ])
      .then(answers => {
        var itemSelected = answers.itemId;
        var unitAmount = answers.purchase;

        console.log(
          "\n-------------------------------------------\n" +
            "Item id selected " +
            itemSelected
        );
        console.log("Number of units selected: " + unitAmount);
        getInventory();

        function getInventory() {
          var productDetail =
            "Select stock_quantity, price from products Where item_id =" +
            itemSelected;

          connection.query(productDetail, function(err, res) {
            if (err) throw err;
            var remainingStock = res[0].stock_quantity;
            var itemPrice = res[0].price;
            console.log(
              "Current inventory for product id " +
                itemSelected +
                ": " +
                remainingStock +
                " items left"
            );
            var orderEffect = remainingStock - unitAmount;
            if (orderEffect < 0) {
              terminateOrder();
            } else {
              acceptOrder();
              var totalPrice = itemPrice * unitAmount;
              console.log("Your total amount is $" + totalPrice);
              console.log(
                "Updated inventory: " +
                  orderEffect +
                  " items remaining for product id: " +
                  itemSelected +
                  "\n"
              );
              updateInventory();

              function updateInventory() {
                var updatedInv =
                  "SELECT stock_quantity - " +
                  unitAmount +
                  " FROM products WHERE item_id = " +
                  itemSelected;
                connection.query(updatedInv, function(err, res) {
                  if (err) throw err;
                });
              }
            }
          });
        }
      });
  });
}

function terminateOrder() {
  console.log(
    "Sorry for the inconvience, but at the moment we don't have enough inventory to fulfill your order."
  );
}
function acceptOrder() {
  console.log(
    "Thank you, your order has been filled" +
      "\n-------------------------------------------"
  );
}
