var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	User.create(req.body, function(err, data) {
		if(err) {
			console.log('Error');
		} else {
			res.render('index', { title: data });
		}
	});
});


module.exports = router;
