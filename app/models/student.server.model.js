var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var studentSchema = new Schema({
	'studentNumber' : Number,
	'password' : String,
	'firstName' : String,
	'lastName' : String,
	'address' : String,
	'city' : String,
	'phoneNumber' : Number,
	'email' : String,
	'semester' : Number,
	'course':{
		type:Schema.Types.ObjectId,
		ref:'Course'
	}
});

module.exports = mongoose.model('Student', studentSchema);
