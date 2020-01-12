// dependencies 
var mysql = require("mysql");
//var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"localhost",

    //connection info
    port: 3306,
    user:"root",
    password: "Jacky",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) throw err;
    //test connection 
    console.log("your connection id is the following " , connection.threadId + "\n");
})