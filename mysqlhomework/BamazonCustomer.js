var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM `Products`', function (err, results){
	if (err){
		throw err;
	}







console.log('results', results);

	});




var inquirer = require('inquirer');


    inquirer.prompt([{
        name: "item",
        type: "input",
        message: "Which ID would you like to buy??"
    }, {
        name: "units",
        type: "input",
        message: "How many units would you like to buy??"
    }


    ]).then(function(answer) {
        connection.query("SELECT FROM Bamazon.Products", {


            itemname: answer.item,
            category: answer.category,
            startingbid: answer.startingBid,
            highestbid: answer.startingBid
        }, function(err, res) {

        	if(StockQuantity < 1){
        		console.log("Insufficient Quantity!")
        	}else{

        		//take away from the quantity in sql.

        	}

          
            
        });
    })
























connection.end();

