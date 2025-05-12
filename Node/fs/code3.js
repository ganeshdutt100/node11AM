const fs = require("fs");

// fs.readFile("file2.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.stat("file2.txt", (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File Stats:", stats);
//   console.log("Is file?", stats.isFile());
//   console.log("Is directory?", stats.isDirectory());
//   console.log("File Size:", stats.size, "bytes");
//   console.log("Created on:", stats.birthtime);
// });

// fs.existsSync('file2.txt'){
//     console.log("File Exists");
//     if(err){
//         console.error(err)
//         return
//     }

// }

if (fs.existsSync("file2.txt")) {
  console.log("File Exists");
} else {
  console.log("file does not exists");
}
