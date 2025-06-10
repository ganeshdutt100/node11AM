const express = require("express");
const app = express();
const port = 3000;

app.get("/api/server", (req, res) => {
  res.json({ message: "hello from server" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
