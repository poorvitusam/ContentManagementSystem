var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},

});

var User = module.exports = mongoose.model("User", UserSchema);

module.exports.getUserByUsername = function(username, callback){
	var query = {type:String, username: username};
	User.findOne(query, callback);
}
 
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}