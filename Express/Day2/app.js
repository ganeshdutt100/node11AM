const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log("middleware first");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello from Express");
  //   console.log("");
});

app.get("/about", (req, res) => {
  res.send("Hello from About Page");
  //   console.log("");
});
app.use((req, res, next) => {
  //   console.log("middleware second");
  res.status(404).send("404 page not found ");
  next();
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
