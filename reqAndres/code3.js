const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  
  <body>
      <form action="/submit" >
          <label>Enter your name : </label>
          <input type="text" placeholder="Ganesh Dutt"> <br> <br>
  
          <label>Enter your Email : </label>
          <input type="email" placeholder="xyz@gmail.com"> <br> <br>
  
          <label>Enter your password : </label>
          <input type="password" placeholder="......."> <br> <br>
  
  
          <input type="submit">
  
      </form>
  </body>
  
  </html>
      `);
    res.end();
  } else if (req.url === "/submit" && req.method === "POST") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `
        <h1>Congratulation</h1>
        `
    );
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `
        <h1>404 page not found</h1>
        `
    );
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`at http://localhost:${PORT}`);
});
