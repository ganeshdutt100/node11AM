const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


mongoose.connect(process.env.MONGO_URI)
.then((()=>console.log("Connected to MongoDB")))
.catch((err)=>console.log(err));

app.get('/register' , (req, res)=>{
    res.render('register');
})

app.get('/login' , (req, res)=>{
    res.render('login');
})

app.post('/register' , async (req, res)=>{
    const {name , email , password} = req.body; 

 const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({name,email,password:hashedPassword});

    
    const user = await User.findOne({email});

})


app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});