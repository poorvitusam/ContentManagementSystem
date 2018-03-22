var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
}, {
	collection: 'admin'
});

var UserAdmin = module.exports = mongoose.model('UserAdmin', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	// console.log(username);
	var query = {type:String, username: username};
	UserAdmin.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	UserAdmin.findById(id, callback);
}
 
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
	// callback(null, true);
}