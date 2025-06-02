const express = require("express");
const app = express();
const path = require("path");
const port = 3006;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());

app.get("/", (req, res) => res.render("form"));
app.post("/certificate", (req, res) => {
  const { name, course } = req.body;
  res.render("certificate", { name, course });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
