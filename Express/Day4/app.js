const express = require("express");
const app = express();
const PORT = 3007;

// local Modules
const formsRouter = require("./routes/formsRouter");

app.use(express.urlencoded());

app.use(formsRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
