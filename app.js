// console.log("Hello, World!");
// console.log("This is a simple Node.js application.")

const http = require("http");
let PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Request received: ", req.url, req.method);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello, World!</h1><p>This is a simple Node.js application.</p>");
});

server.listen(PORT, () => {
  console.log(`Server is running on port at http://localhost:${PORT}`);
});
