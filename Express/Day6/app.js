const express = require("express");
const path = require("path");
const app = express();
const PORT = 3007;

// local Modules
const homeRouter = require("../Day4/routes/homeRouter");
const formsRouter = require("../Day4/routes/formRoutes");
const filePath = require("./utils/filePath");

app.use(express.urlencoded());

app.use(homeRouter);
app.use(formsRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(filePath, "view", "error.html"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
