const { check } = require("express-validator");

module.exports = new (class {
  commentValidation() {
    return [
      check("name").notEmpty().withMessage("نام تان خالی است!"),
      check("message").notEmpty().withMessage("پیام تان خالی است!"),
    ];
  }
})();
