const express = require("express");
const router = express.Router();
const proflieRouter = require(".././admin/profile");
const skillsRouter = require(".././admin/skills");
const contactRouter = require(".././admin/contact");
const sidbarRouter = require(".././admin/sidebar");
const articleRouter = require(".././admin/article");

router.use("/blog", articleRouter);
router.use("/get_length", sidbarRouter);
router.use("/profile", proflieRouter);
router.use("/skills", skillsRouter);
router.use("/contacts", contactRouter);

module.exports = router;
