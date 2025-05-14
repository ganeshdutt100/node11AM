const express = require("express");
const app = express();
const PORT = 3007;

app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log("Request received : ", req.url, req.method);
  next();
});

app.get("/submit-details", (req, res) => {
  res.send(`
              <h2>Submit Your Details</h2>
    <form action="/submit-details" method="POST">
      <input type="text" name="username" placeholder="Enter your name" required />
      <button type="submit">Submit</button>
    </form>
        `);
});

app.post("/submit-details", (req, res) => {
  // const { name, email, message } = req.body;
  //   const username = req.body.username;
  const { username, email, message } = req.body;
  res.send(`
              <p>Welcome, <strong> ${username}</strong>! Thanks for submitting the form.</p>
        `);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
