/**
 * Contains connection to the database using mongoose.
 * @module mongodb
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
module.exports = connectToMongo