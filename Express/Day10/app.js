require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

function otpGenerator(length) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

app.get("/api/otp", (req, res) => {
  let length = parseInt(process.env.Value_length);
  let otp = otpGenerator(length);

  res.json({ otp: otp });
});

app.listen(process.env.PORT, () => {
  console.log(`Open http://localhost:${process.env.PORT} in your browser`);
});
