const express = require("express");
const path = require("path");
const homeRouter = express.Router();
const filePath = require("../utils/filePath");

homeRouter.get("/", (req, res) => {
  // res.send("<h1>Welcome to Home Page</h1>");
  res.sendFile(path.join(filePath, "view", "homePage.html"));
});

module.exports = homeRouter;
