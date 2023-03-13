const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const DB = process.env.DATABASE_URI;

const connectDB= async()=>{


    try {
        await  mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(DB);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
//   await  mongoose.set("strictQuery", false);
//   await mongoose.connect(DB, (err, connection)=>{
//    if(connection){
//        console.log("Database Connected");
//    }
//    else{
//        console.log(err);
//    }
//    })
}



module.exports = connectDB;