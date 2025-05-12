const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello, World!</h1>");
});

let PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port at http://localhost:${PORT}`);
});
