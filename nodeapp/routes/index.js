// var express = require('express');
// var router = express.Router();
// var User = require('../models/user');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var UserAdmin = require('../models/admin');

// // Register
// router.get('/register', function(req, res){
// 	res.render('register');
// });

// router.get('/login', function(req, res, next) {
// 	res.render('login', { title: 'Admin Login' });
// });

// router.get('/dashboard', function(req, res, next) {
// 	res.render('dashboard', { title: 'Admin Login Success' });
// });

// router.post('/create', function(req, res, next) {
// 	// console.log(req.body);
// 	User.create(req.body, function(err, data) {
// 		if(err) {
// 			console.log('Error');
// 		} else {
// 			res.render('dashboard', { title: data });
// 		}
// 	});
// });

// router.post('/update', function(req, res, next) {
// 	console.log(req.body);
// 	User.findOneAndUpdate({ name: req.body.original_name }, { name: req.body.updated_name }, function(err, user) {
// 	  if (err) throw err;

// 	  // we have the updated user returned to us
// 	  console.log(user);
// 	});
// });

// router.post('/delete', function(req, res, next) {
// 	console.log(req);
// 	User.findOneAndRemove(req.params, function(err) {
// 	  	if(err) {
// 			console.log('Error');
// 		} else {
// 			res.render('dashboard', { title: data });
// 		}

// 	  // we have deleted the user
// 	  console.log('User deleted!');
// 	});
// });

// router.get('/find', function(req, res, next) {
// 	User.find(req.query, function(err, user) {
// 	  if (err) throw err;

// 	  res.render('dashboard', { users: user });
// 	});
// });

// /* GET home page. */
// // router.get('/', function(req, res, next) {
// // 	res.render('dashboard', { title: 'Express' });
// // });

// router.get('/', function(req, res, next) {
// 	res.render('login', { title: 'Admin Login' });
// });

// // Register User
// router.post('/register', function(req, res){
// 	var username = req.body.username;
// 	var password = req.body.password;
// 	var password2 = req.body.password2;

// 	// Validation
// 	// req.checkBody('username', 'Username is required').notEmpty();
// 	// req.checkBody('password', 'Password is required').notEmpty();
// 	// req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

// 	// var errors = req.validationErrors();

// 	// if(errors){
// 	// 	res.render('register',{
// 	// 		errors:errors
// 	// 	});
// 	// } else {
// 	var newUser = new UserAdmin({
// 		username: username,
// 		password: password
// 	});

// 	UserAdmin.createUser(newUser, function(err, user){
// 		if(err) throw err;
// 		console.log(user);
// 	});

// 	// req.flash('success_msg', 'You are registered and can now login');

// 	res.redirect('/users/login');
// 	// }
// });

// passport.use(new LocalStrategy(function(username, password, done) {
  	
//   	console.log(username);
//    	console.log('************authenticate********');
//    	UserAdmin.getUserByUsername(username, function(err, user){
// 	   	if(err) {
// 	   		console.log('User name error');
// 	   		// console.log(user);
// 	   		// throw err;
// 	   	} 
// 	   	if(!user){
// 	   		return done(null, false, {message: 'Unknown User'});
// 	   	}

// 	   	UserAdmin.comparePassword(password, user.password, function(err, isMatch){
// 	   		if(err) throw err;
// 	   		if(isMatch){
// 	   			return done(null, user);
// 	   		} else {
// 	   			return done(null, false, {message: 'Invalid password'});
// 	   		}
// 	   	});
//    	});
//   }));

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   UserAdmin.getUserById(id, function(err, user) {
//     done(err, user);
//   });
// });

// router.post('/login',
//   passport.authenticate('local', {successRedirect:'/dashboard', failureRedirect:'/users/dashboard',failureFlash: true}),
//   function(req, res) {
//     res.redirect('/dashboard');
//   });

// router.get('/logout', function(req, res){
// 	req.logout();

// 	req.flash('success_msg', 'You are logged out');

// 	res.redirect('/users/login');
// });


// module.exports = router;
