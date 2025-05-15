const express = require("express");
const path = require("path");
const formRouter = express.Router();

formRouter.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/form.html"));
});
formRouter.post("/form", (req, res) => {
  console.log(req.url, req.body);

  res.sendFile(path.join(__dirname, "../view/userPageShow.html"));
});

module.exports = formRouter;
