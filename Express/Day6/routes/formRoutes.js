const express = require("express");
const path = require("path");
const formRouter = express.Router();
const filePath = require("../utils/filePath");

formRouter.get("/form", (req, res) => {
  res.sendFile(path.join(filePath, "view", "form.html"));
});
formRouter.post("/form", (req, res) => {
  console.log(req.url, req.body);

  res.sendFile(path.join(filePath, "view", "userPageShow.html"));
});

module.exports = formRouter;
