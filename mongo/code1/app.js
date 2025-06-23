const express = require("express");
const app = express();
const Message = require("./messageModel");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/insert-data", async (req, res) => {
  try {
    await Message.create({ text: "hello world" });
    res.send("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/messages", async (req, res) => {
  const data = await Message.find();
  res.json(data);
});

module.exports = app;
