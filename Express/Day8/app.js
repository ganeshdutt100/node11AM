require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); // 3000

//API Route
app.get("/api/archana", (req, res) => {
  res.json({ message: "Welcome to the Express app!" });
  //   res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
