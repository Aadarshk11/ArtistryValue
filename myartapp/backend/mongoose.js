const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/ArtistryValue'
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
        const db = mongoose.connection.db;
        const fetched_data = await db.collection('mainData').find({}).toArray();
        const artCategory = await db.collection('ArtCategory').find({}).toArray();
        global.mainData = fetched_data;
        global.ArtCategory = artCategory;
        
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = mongoDB;
