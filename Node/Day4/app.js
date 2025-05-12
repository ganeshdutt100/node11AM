const http = require("http");
let PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Request received: ", req.url, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write(
    `<h1>Hello, World!</h1><p>This is a simple Node.js application.</p> <p>hello</p> 
     <h1>hello</h1>
     <p>NPM</p>
     <p>NPM init</p>
     <p>NPM init -y</p>
     <p>NPM i nodemon</p>
     <p>NPM i nodemon start</p>
    `
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on port at http://localhost:${PORT}`);
});
