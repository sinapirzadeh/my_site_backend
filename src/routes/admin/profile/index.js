const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getProflie);
router.post("/", controller.addProflie);
router.put("/", controller.editProflie);    
router.delete("/", controller.delProflie);

module.exports = router;
