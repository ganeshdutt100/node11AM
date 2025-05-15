const express = require("express");
const path = require("path");
const app = express();
const PORT = 3007;

// local Modules
const homeRouter = require("./routes/homeRouter");
const formsRouter = require("./routes/formRoutes");

app.use(express.urlencoded());

app.use(homeRouter);
app.use(formsRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./view/Error.html"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
