const http = require("http");
const PORT = 3004;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
          <h1>Home Page</h1>
          `);
    res.end();
  }
  // about
  else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
          <h1>About Page</h1>
          `);
    res.end();
  }

  // Project
  else if (req.url === "/project") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
          <h1>Project Page</h1>
          `);
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
          <h1>Page Not found</h1>
          `);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`at http://localhost:${PORT}`);
});
