const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getProflie);
router.post("/", controller.addOrEditProfile);

module.exports = router;
