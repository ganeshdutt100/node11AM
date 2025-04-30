const fs = require("fs");

// try {
//   let data = fs.readFileSync("example.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// try {
//   fs.writeFileSync("example.txt", "Sync File Write");
//   console.log("File Created");
// } catch (err) {
//   console.error(err);
// }

// fs.appendFile("example.txt", "\n New Data", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File Updated");
// });

// fs.rename("example.txt", "userInfo.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File Renamed");
// });

fs.unlink("userInfo.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File Deleted");
});
