const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validation = require("./validator");
const multerConfig = require("./../../../packages/multerConfig");

router.get("/", controller.allArticles);

router.get("/:id", controller.getArticle);

router.post(
  "/",
  multerConfig.single("image"),
  validation.articleValidation(),
  controller.validate,
  controller.addArticle
);

router.put(
  "/:id",
  multerConfig.single("image"),
  validation.articleValidation(),
  controller.validate,
  controller.editArticle
);

module.exports = router;
