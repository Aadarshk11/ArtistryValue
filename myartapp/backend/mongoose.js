const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/'
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = mongoDB;
