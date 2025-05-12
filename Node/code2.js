const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Request received: ", req.url, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <!DOCTYPE html>

 <html>

 <head>

 <title>Form</title>

 </head>

 <body>

 <form action="/submit" method="post">

 <label for="name">Name:</label>

 <input type="text" id="name" name="name"><br><br>

 <label for="gender">Gender:</label>

 <select id="gender" name="gender">

 <option value="male">Male</option>

 <option value="female">Female</option>

 <option value="other">Other</option>
 </select><br><br>
 

 <input type="submit" value="Submit">
 </form>

 </body>

 </html>
    `);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on port at http://localhost:${PORT}`);
});
