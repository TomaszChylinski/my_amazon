
-- create database
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

--create table
use bamazon;

-- create columns
    CREATE TABLE products (
        item_id INTEGER(5) NOT NULL,
        product_name VARCHAR(30) NOT NULL,
        department_name VARCHAR(30),
        price INTEGER(10),
        stock_quantity INTEGER(10),
        PRIMARY KEY (item_id)
        );

-- insert data
     insert into products (item_id, product_name, department_name, price, stock_quantity)
	 VALUES (
				"01246", "nike t-shirt","clothing", "22", 20
			),
            (
				"01247", "nike soccer cleats","sporting", "125", 20
            ),
               (
				"01248", "soccer ball","sporting", "35", 30
            ),
               (
				"01249", "basketball","sporting", "30", 50
            ),
               (
				"01250", "timberland sweather","clothing", "33", 50
            ),
               (
				"01252", "martha stewart coffee cups","kitchen", "76", 5
            ),
               (
				"01253", "ice melt","outside", "13", 50
            ),
               (
				"01254", "baseball bat","sporting", "40", 10
            );