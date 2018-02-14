// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
	selectAll: function(cb) {
		var queryString = "SELECT * FROM burgers;";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(values, cb) {
		var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
		connection.query(queryString, values, function(err, result) {
		console.log("queryString: " + queryString);	
			if (err) {
				throw err;
			}
			cb(result);
		});

	},
	updateOne: function(values, cb) {
		console.log("Updating: " + values);
		var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
		connection.query(queryString, values, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}

};


// Export the orm object for the model.
module.exports = orm;