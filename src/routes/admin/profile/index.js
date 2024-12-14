const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getProflie);
router.post("/add", controller.addProflie);
router.put("/edit", controller.editProflie);    
router.delete("/delete", controller.delProflie);

module.exports = router;
