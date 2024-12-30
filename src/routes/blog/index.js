const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");

router.get("/", controller.blog);

router.get("/:slug", controller.getArticle);
router.get("/like/:slug", controller.getLinkArticle);
router.get("/comments", controller.getComments);

router.post(
  "/comment",
  validator.commentValidation(),
  controller.validate,
  controller.postComment
);

module.exports = router;
