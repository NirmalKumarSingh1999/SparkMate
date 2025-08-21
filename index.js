const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    res.send("Hello today world");
});

app.listen(PORT = 3000,() =>{
    console.log(`Listiening to port ${PORT}`);
})