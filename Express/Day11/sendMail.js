const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "maud.lowe@ethereal.email",
        pass: "rzd3knHKH9wR5s8upN",
      },
    });

    // Wrap in an async IIFE so we can use await.
    (async () => {
      const info = await transporter.sendMail({
        from: '"Ganesh Dutt" <ganeshdutt@gmail.com>',
        to: "trainerganeshdutt@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?", // plain‑text body
        html: "<b>Hello world?</b>", // HTML body
      });

      console.log("Message sent:", info.messageId);
    })();
  } catch (err) {
    console.error(err);
  }
};
module.exports = sendMail;
