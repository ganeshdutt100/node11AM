const fs = require("fs");

fs.readFile("file2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

//
// fs.writeFile("file2.txt", "Hello Node.js ", (err) => {
//   //   if (err) throw err;
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File Created");
// });
