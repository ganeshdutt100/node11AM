const express = require("express");
const passport = require('passport')
const session = require('express-session')
require('./auth/google')
const app = express();
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
   
  }));
app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
  
    res.send(`<a href="/auth/google">Login</a>`)
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { 
     failureRedirect: '/',
    successRedirect: '/profile',
    }),
  function authCheck(req, res,next) {
    if(req.isAuthenticated()){
        return next()
    }
    // Successful authentication, redirect home.
    res.redirect('/');
  });
app.get('/profile' , authCheck, (req,res) => {
 res.send(`
    <h1>Welcome ${req.user.displayName}</h1>
    <img src="${req.user.photo[0].value}">
    <a href="/logout">Logout</a>
    `)
})


app.get('/logout', (req,res)=>{
    req.logOut(()=>{
        res.redirect('/')
    })
})
app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})