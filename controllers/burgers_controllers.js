var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Routes
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burger", function(req, res) {
	var newBurger = req.body.burger_name;
	console.log("new burger: " + newBurger);
	burger.insert(newBurger, function(result) {
		res.json({ id: result.insertId });
	});
});

router.put("/api/burger/:id", function(req, res) {
	var id = req.params.id;
	console.log("burger id: " + id);
	burger.update(id, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;