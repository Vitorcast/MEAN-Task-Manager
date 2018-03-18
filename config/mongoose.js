// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	const db = mongoose.connect(config.db);

	// Load Models
	require('../app/models/task.server.model'); 
	require('../app/models/course.server.model'); 
	require('../app/models/student.server.model'); 	

	// Return the Mongoose connection instance
	return db;
};