const express = require("express");
const router = express.Router();
const path  = require('path');
const Student = require("../models/Student");

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../public") });
});

router.post("/register", async (req, res) => {
  const { name, age, course } = req.body;
  await Student.create({ name, age, course });
  res.send("Student Registered");
});


router.get("/Students", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

module.exports = router;