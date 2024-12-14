const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");

router.get("/profile", controller.profile);

router.get("/skills", controller.skills);

router.post(
  "/add_contact",
  validator.contactValidator(),
  controller.validate,
  controller.addContact
);   




router.post(
  "/add_comment",
  validator.commentValidator(),
  controller.validate,
  controller.addComment
);
router.post(
  "/add_comment",
  validator.commentValidator(),
  controller.validate,
  controller.addComment
);

module.exports = router;
