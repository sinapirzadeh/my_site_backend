const express = require("express");
const router = express.Router();
const admin = require("./admin");
const authRouter = require("./auth");
const { isLoggined } = require("./../middlewares/auth");
const home = require("./home");

router.use("/", home);
router.use("/admin", admin);
// router.use("/admin", isLoggined, admin);
router.use("/entertoadmin", authRouter);

module.exports = router;
