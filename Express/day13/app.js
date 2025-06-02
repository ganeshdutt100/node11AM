const express = require("express");
const app = express();
const port = 3004;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const user = {
    name: "Aman",
    age: 23,
    occupation: "Software Engineer",
    city: "Delhi",
  };
  res.render("index", { user });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
