// requiring mongoose to create schema
const mongoose = require("mongoose");

// creating schema 
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    age:{
        type: Number,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    gender:{
        type: String
    }
});

// creating mongoose model
const User = mongoose.model("User",userSchema);

module.exports = User;