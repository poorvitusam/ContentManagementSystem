var mongoose = require('mongoose');

mongoose.connect('mongodb://<poorvi>:<binghamton>@ds133084.mlab.com:33084/binghamton-test', function(err){
	if(err){
		console.log('Error:', err);
	} else {
		console.log('Connection successful');
	}
}

var Schema = mongoose.Schema;
var userSchema = new Schema({
	name:Sring,
});

var User = mongoose.model('User', userSchema);

module.exports = User;
