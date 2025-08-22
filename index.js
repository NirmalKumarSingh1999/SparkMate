const express = require("express");
const connectDB = require("./config/database");
const app = express();

connectDB()
.then(()=>{
    console.log("MongoDB database was connected...")
    app.listen(PORT = 3000,() =>{
    console.log(`Listiening to port ${PORT}`);
})
})
.catch((err)=> console.log("Database cannot be connected..."))


// const {checker} = require("./middlewares/app"); // importing the middleware
// app.use(express.json()) //parses json body


// //checking if the admin is logged in or not
// app.get("/admin",checker,(req,res)=>{
//     try{
//         throw new Error("Admin failed!");
//     }
//     catch(err){
//         next(err);
//     }
// });


// app.get("/user",checker,(req,res)=>{
//     console.log("Welcome user....");
//     res.send("Üser was loggined!!!");

// });

// app.use((err,req,res,next) =>{
//      console.error(err.stack); // For debugging
//     if(err) res.status(500).send("Error message displayed...")
// })

