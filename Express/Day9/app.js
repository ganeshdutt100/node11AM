require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); // 3000

function fun(length) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // Generate a random digit
  }

  return otp;
}

//API Route
app.get("/api/data", (req, res) => {
  const length = parseInt(process.env.OTP_LENGTH) || 6; // Default to 6 if not set
  const otp = fun(length);
  res.json({ otp: otp });
  //   res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
