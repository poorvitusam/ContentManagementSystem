var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

//Get User Model
var User = require('../models/user');

/*
* Register User
*/
router.post('/register', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

    User.findOne({username: username}, function(err, user) {
        if (err) console.log(err);
        
        if(user) {
        	res.json("userExists");
        } else {
        	var user = new User({
                username: username,
                password: password
            });
        	bcrypt.genSalt(10, function(err, salt) {
			    bcrypt.hash(user.password, salt, function(err, hash) {
			        user.password = hash;
			        user.save(function(err) {
		        		if(err) {
		        			console.log(err);
		        		} else {
		        			res.json("userRegistered");
		        		}
		        	});
			    });
			});

        }
    })
})

/*
* Login
*/
router.post('/login', function (req, res) {

    var username = req.body.username;
    var password = req.body.password;

    User.getUserByUsername(username, function(err, user){
	   	if(err) {
	   		console.log('User name error');
	   	} 
	   	if(!user){
	   		return res.json("invalidLogin");
	   	}

	   	User.comparePassword(password, user.password, function(err, isMatch){
	   		if(err) throw err;
	   		if(isMatch){
	   			res.json(username);
	   		} else {
	   			res.json("invalidLogin");
	   		}
	   	});
   	});
});


//Exports
module.exports = router;