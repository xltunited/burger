var connection = require("./connection.js");

var orm = {
	selectAll: function (cb) {
		var queryString = "SELECT * FROM burgers;";
		connection.query(queryString, function (err, result) {
			cb(result);
		});
	},
	insertOne: function (sandwichName, cb) {
		var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + sandwichName + "', false);";
		connection.query(queryString, function (err, result) {
			cb(result);
		});
	},
	updateOne: function (id, cb) {
		var queryString = "UPDATE burgers SET devoured=true WHERE id=" + id + ";"
		connection.query(queryString, function (err, result) {
			cb(result);
		});
	}
};

module.exports = orm;
