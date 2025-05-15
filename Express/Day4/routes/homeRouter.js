const express = require("express");
const path = require("path");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  // res.send("<h1>Welcome to Home Page</h1>");
  res.sendFile(path.join(__dirname, "../view/homePage.html"));
});

module.exports = homeRouter;
