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

        console.log("Item id selected " + itemSelected);
        console.log("Number of units selected: " + unitAmount);
        getInventory();


        function getInventory() {
          var stockQuantity =
            "Select stock_quantity from products Where item_id =" +
            itemSelected;
          connection.query(stockQuantity, function(err, res) {
            if (err) throw err;
            var remainingStock = res[0].stock_quantity;
            console.log("Current inventory for item id "+ itemSelected + ": " + remainingStock + " items left");
          });

          var fillOrder = false; 
          var orderEffect = remainingStock - unitAmount;
          console.log(orderEffect + ' show number of remianing inventory')
        }


      });
  });
}
