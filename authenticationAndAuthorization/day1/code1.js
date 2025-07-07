const express = require("express");
const app = express();
 const cookieParser = require('cookie-parser');

 app.use(cookieParser())

app.get("/" ,(req,res)=>{
    res.send("hello world ")
})

app.get('/login',(req,res)=>{
  res.cookie("user" , "Ganesh_Dutt" );
  res.send("user authenticated , cookie set")
})

// app.get('/dashboard',(req,res)=>{
//     const user  = req.cookies.user;
//     if(user == "Ganesh"){
//         res.send("welcome to dashboard , user authenticated")
//     }
//     else{
//         res.send("unauthenticated user")
//     }
// })

// app.get('/logout',(req,res)=>{
//     res.clearCookie("user");
//     res.send("logged out ")
// })


app.get("/userData",(req,res)=>{
    console.log(req.cookies);
    
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
})
