var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
 	all: function(callback) {
 		orm.selectAll(function(res){
 			callback(res);
 		});
 	},
 	insert: function(vals, callback) {
 		orm.insertOne(vals, function(res){
 			callback(res);
 		});
 	},
 	update: function(vals, callback) {
 		orm.updateOne(vals, function(res){
 			callback(res);
 		});
	}	
};

// Export the burger model.
module.exports = burger;