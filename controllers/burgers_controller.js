var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
	res.redirect('/index');
});

router.get('/index', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		res.render('index', hbsObject);
	});
});

router.post('/index/create', function (req, res) {
	burger.create(req.body.name, function () {
		res.redirect('/index');
	});

});

router.put('/index/update/:id', function (req, res) {

	burger.update(req.params.id, function () {
		res.redirect('/index');
	});
});

module.exports = router;