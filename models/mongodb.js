/**
 * Contains connection to the database using mongoose.
 * @module mongodb
 */

const mongoose = require('mongoose');

/**
 * Establishes a connection to the MongoDB database.
 * @param {string} url - The URL of the MongoDB database.
 * @param {object} options - The options for the MongoDB connection.
 * @param {function} callback - The callback function to be executed after the connection is established.
 */
mongoose.connect('mongodb://localhost:27017/lavishWebTrackerDB', {useNewUrlParser: true}, (err) => {
    if(!err){
       console.log('Successfully Established Connection with MongoDb'); 
    }
    else {
        console.log('Unable to Connect to MongoDb Error: '+ err);
    }
});

// connect node and mongodb
require('./employees.model');