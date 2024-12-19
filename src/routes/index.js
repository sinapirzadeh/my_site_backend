const express = require("express");
const router = express.Router();
const admin = require("./admin");
const authRouter = require("./auth");
const { isLoggined } = require("./../middlewares/auth");
const home = require("./home");
const blog = require("./blog");

router.use("/", home);
// router.use("/admin", isLoggined, admin);
router.use("/admin", admin);
router.use("/articles", blog);
router.use("/entertoadmin", authRouter);

module.exports = router;
