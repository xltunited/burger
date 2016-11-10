var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "zeztn52yzve8cods",
	password: "x27ng6gf85mqxud1",
	database: "rdpp2n8gqsi01yti"
});


connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
