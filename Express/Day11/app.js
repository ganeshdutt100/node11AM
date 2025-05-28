const express = require("express");
const app = express();
const port = 3000;
const sendMailer = require("./sendMail");

app.get("/", (req, res) => {
  res.send("Server start");
});

app.get("/sendEmail", sendMailer);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
