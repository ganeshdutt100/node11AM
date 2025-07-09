const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User = require("./model/User");
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

  const token  = jwt.sign({email:newUser.email}, process.env.JWT_SECRET);
  res.cookie("token", token).send("Registered Successfully");
    
    // const user = await User.findOne({email});

})

app.post("/login" , async (req, res)=>{
    const {email , password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        res.send("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        res.send("Password is incorrect");
    }
    const token  = jwt.sign({email:user.email}, process.env.JWT_SECRET);
    res.cookie("token", token).send("Logged In Successfully");
})


app.get('/profile' , (req, res)=>{
    const token = req.cookies.token;
   if(!token) return res.send("Not logged in");

   const user = jwt.verify(token, process.env.JWT_SECRET);
   res.send("Logged in user "+ user.email);
    
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});