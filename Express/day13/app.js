const express = require("express");
const app = express();
const port = 3004;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Aman" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
