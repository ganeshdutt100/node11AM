const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>hello world </h1>");
  res.write("<h1>hello world 2 </h1>");
  res.write("<h1>hello world 3 </h1>");
  //   process.exit(); stop event loop
  res.write("<h1>hello world 4 </h1>");

  res.end();
});

server.listen(PORT, () => {
  console.log(`at http://localhost:${PORT}`);
});
