const express = require("express");
const app = express();
const PORT = 3007;

// local Modules
const homeRouter = require("./routes/homeRouter");
const formsRouter = require("./routes/formRoutes");

app.use(express.urlencoded());

app.use(homeRouter);
app.use(formsRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
