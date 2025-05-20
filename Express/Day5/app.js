import express from "express";
import qr from "qr-image";
import cors from "cors";
const PORT = 3000;
const app = express();

app.use(cors());

app.get("/QrCode", (req, res) => {
  let { url } = req.query;
  //   console.log(url);
  if (!url) return res.status(400).json({ error: "url is required" });

  const qr_image = qr.image(url, { type: "png" });
  const base64Image = `data:image/png;base64,${qr_image.toString("base64")}`;

  res.json({ qr: base64Image });

  //   qr_image.pipe(res);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
