const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getContacts);
router.put("/is_read/:id", controller.setIsRead);
router.delete("/delete/:id", controller.delContact);

module.exports = router;
