const express = require("express");
const mongoose = require("mongoose");
const debug = require("debug")("app:main");
const cors = require("cors");
const config = require("config");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = require("express")();

app.use(cors());
const router = require("./src/routes");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "تعداد درخاست شما زیاد بوده پس یه 15 دقیقه صبر کن ممنون",
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(limiter);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect(config.get("db.address"))
  .then(() => debug("db connected!"))
  .catch((error) => debug(error.message));

app.use("/api", router);

const port = process.env.PORT || config.get("server.port");
app.listen(port, () => console.log(`http://localhost:${port}`));
