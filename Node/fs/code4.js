const fs = require("fs");

let readStream = fs.createReadStream("file3.txt", "utf-8");
readStream.on("data", (chunk) => {
  console.log("Received data : ", chunk);
});
readStream.on("end", () => {
  console.log("Data End");
});

let writeStream = fs.createWriteStream("file3.txt");

writeStream.write("Hello world \n");
writeStream.write("Hello world 2 \n");
writeStream.write("Hello world 2 3 \n");
writeStream.end();

writeStream.on("finish", () => {
  console.log("Finished Data");
});
writeStream.on("error", (err) => {
  console.error("Error ");
});
