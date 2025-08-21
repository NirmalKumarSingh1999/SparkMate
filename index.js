const express = require("express");
const app = express();

app.get("/user",(req,res)=>{
    res.send({firstNae: "Nirmal", LastName : "Singh"});
})

app.post("/user",(req,res)=>{
    console.log("Save data in the database..");
    res.send("Data has been successfully save in the Database...")
})

app.listen(PORT = 3000,() =>{
    console.log(`Listiening to port ${PORT}`);
})