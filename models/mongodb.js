/**
 * Contains connection to the database using mongoose.
 * @module mongodb
 *

const mongoose = require('mongoose');

/**
 * Establishes a connection to the MongoDB database.
 * @param {string} url - The URL of the MongoDB database.
 * @param {object} options - The options for the MongoDB connection.
 * @param {function} callback - The callback function to be executed after the connection is established.
 *
mongoose.connect('mongodb://localhost:27017//img/my-logo.jpg', {useNewUrlParser: true}, (err) => {
    if(!err){
       console.log('Successfully Established Connection with MongoDb'); 
    }
    else {
        console.log('Unable to Connect to MongoDb Error: '+ err);
    }
});

// connect node and mongodb
const Employee = require('./model');
*/
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017//lavishWebTrackerDB?"

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;