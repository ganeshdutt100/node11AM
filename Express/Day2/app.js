const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express");
  //   console.log("");
});
app.get("/about", (req, res) => {
  res.send("Hello from About Page");
  //   console.log("");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
