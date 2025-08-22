const mongoose = require("mongoose");

// it returns a promise whether the connnection was success or not

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://nirmalform:pinky123@namastenode.kzhsrxq.mongodb.net/devTinder");
}

module.exports = connectDB;
