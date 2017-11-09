var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/find', function(req, res, next) {
	User.find(req.query, function(err, user) {
	  if (err) throw err;

	  res.render('index', { users: user });
	});
});

router.post('/create', function(req, res, next) {
	// console.log(req.body);
	User.create(req.body, function(err, data) {
		if(err) {
			console.log('Error');
		} else {
			res.render('index', { title: data });
		}
	});
});

router.put('/update', function(req, res, next) {
	console.log(req.body);
	User.findOneAndUpdate({ name: req.body.original_name }, { name: req.body.updated_name }, function(err, user) {
	  if (err) throw err;

	  // we have the updated user returned to us
	  console.log(user);
	});
});

router.delete('/delete', function(req, res, next) {
	console.log(req.body);
	User.findOneAndRemove(req.body, function(err) {
	  if (err) throw err;

	  // we have deleted the user
	  console.log('User deleted!');
	});
});


// router.put('/')


module.exports = router;
