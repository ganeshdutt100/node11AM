const express = require("express");
const path = require("path");
const formsRouter = express.Router();

formsRouter.get("/", (req, res) => {
  // res.send("<h1>Welcome to Home Page</h1>");
  res.sendFile(path.join(__dirname, "../view/homePage.html"));
});

module.exports = formsRouter;
