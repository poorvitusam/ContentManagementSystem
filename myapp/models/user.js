var mongoose = require('mongoose');

mongoose.connect('mongodb://poorvi:binghamton@ds133084.mlab.com:33084/binghamton-test');

var Schema = mongoose.Schema;
var userSchema = new Schema({
	name: String,

}, {
	collection: 'User'
});

var User = mongoose.model('User', userSchema);

module.exports = User;
