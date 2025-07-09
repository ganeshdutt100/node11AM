const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
 const cookieParser = require('cookie-parser');

 app.use(cookieParser())

app.get("/" ,(req,res)=>{
    res.send("hello world ")
const password  = "Ganesh@123"
bcrypt.genSalt(10, function(err, salt) {
    if(err) return console.error(err);
    bcrypt.hash(password, salt, function(err, hash) {
        if(err) return console.error(err);

        console.log("password  ->  " , password)
        console.log("salt  ->  " , salt)
        console.log("hash  -> password +salt " , hash)
    });
});
})
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
})



2^10 = >1024 
Ganesh@123+
ajksdfhjkasdhjkfh3498394jkasbdlfhjkawhtre8rya

