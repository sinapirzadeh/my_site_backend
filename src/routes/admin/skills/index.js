const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.allSkill);
router.post("/add", controller.addSkill);
router.delete("/delete", controller.delSkill);

module.exports = router;
