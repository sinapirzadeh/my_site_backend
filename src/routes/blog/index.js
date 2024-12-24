const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.blog);

router.get("/:slug", controller.getArticle);
router.get("/:short_url", controller.getArticleUrl);

module.exports = router;
