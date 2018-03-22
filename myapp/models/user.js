var mongoose = require('mongoose');

// mongoose.connect('mongodb://poorvi:binghamton@ds133084.mlab.com:33084/binghamton-test');
mongoose.connect('mongodb://localhost/users');

var Schema = mongoose.Schema;
var userSchema = new Schema({
	name: String,

}, {
	collection: 'user'
});

var User = mongoose.model('User', userSchema);

module.exports = User;
