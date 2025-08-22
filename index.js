const express = require("express");
const app = express();

const {checker} = require("./middlewares/app"); // importing the middleware
app.use(express.json()) //parses json body


//checking if the admin is logged in or not
app.get("/admin",checker,(req,res)=>{
    console.log("Welcome Admin....");
    res.send("Admin was loggined!!!");
});


app.get("/user",checker,(req,res)=>{
    console.log("Welcome user....");
    res.send("Üser was loggined!!!");

});

app.listen(PORT = 3000,() =>{
    console.log(`Listiening to port ${PORT}`);
})