if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const helmet = require("helmet");
const cloudinary = require("cloudinary").v2;
const linksRouter = require("./routes/links");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(linksRouter);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//sitemap
app.get("/sitemap.xml", function (req, res, next) {
  res.header("Content-Type", "application/xml");
  res.render("sitemap");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving ${port}`);
});
