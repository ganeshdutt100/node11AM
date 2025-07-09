const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
   let token =  jwt.sign({email:"trainerganeshdutt@gmail.com"}, "secret")

   res.cookie("token", token)
   res.send("JWT Stored in cookie")
   console.log("Generated Token :  ", token);
})

app.get('/read', (req, res) => {
    let token = req.cookies.token;
    res.send(token);
    console.log(token);
    
    let verify = jwt.verify(token, "secret")
    console.log(verify);
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})