import express from "express";
import qr from "qr-image";
import cors from "cors";

const PORT = 3000;
const app = express();
app.use(cors());

app.get("/generate", (req, res) => {
  try {
    const { url } = req.query;

    console.log(url);

    if (!url) return res.status(400).json({ error: "URL is required" });

    const qr_image = qr.imageSync(url, { type: "png" });
    const base64Image = `data:image/png;base64,${qr_image.toString("base64")}`;
    res.json({ qr: base64Image });
  } catch (err) {
    next(err)
  }
});
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
