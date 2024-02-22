const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/notebookninja";

connectToMongo = async () => {
    await mongoose.connect(mongoURI)
    .then(()=> console.log("Connected to Mongo successfully"))
    .catch((err) => console.log);
}

module.exports = connectToMongo;
