
const mongoose = require("mongoose")

// loads .env contents into process.env
require('dotenv').config();

const db = process.env.MONGODB_URL;
// console.log(db);

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(db, {
            usenewUrlParser: true
        })

        console.log("MongoDB is connected");

    } catch (err) {
        console.log(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;
