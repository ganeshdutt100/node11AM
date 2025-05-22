const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;

let feedbacks = [];

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.post("/submit-feedback", (req, res) => {
  const { name, message } = req.body;
  if (name && message) {
    feedbacks.push({ name, message });
    res.redirect("/");
    // res.status(200).send("Feedback submitted successfully");
  }
});

// API
app.get("/api/feedbacks", (req, res) => {
  res.json(feedbacks);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
