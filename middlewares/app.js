const checker = (req,res,next)=>{
    const token = "xyz";
    const authCheck = token === "xyz";
    if(authCheck){
        next();
    }
    else{
        res.status(401).send("Unauthorized access!!!!");
    }
};

module.exports = {
    checker
}