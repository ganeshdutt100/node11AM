import inquirer from "inquirer";
import qr from "qr-image";
// const fs  = require('fs')
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Enter your URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    const answerURL = answers.URL;
    var qr_svg = qr.image(answerURL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", answerURL, (err) => {
      if (err) throw err;
      console.log("File Saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
