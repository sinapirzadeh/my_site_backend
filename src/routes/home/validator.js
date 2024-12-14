const { check } = require("express-validator");

module.exports = new (class {
  contactValidator() {
    return [
      check("name").notEmpty().withMessage("نام تان خالی نباشد!"),
      check("email").isEmail().withMessage("ایمیل وارد کنید"),
      check("message").notEmpty().withMessage("پیام تان خالی نباشد!"),
    ];
  }

  commentValidator() {
    return [
      check("name").notEmpty().withMessage("نام تان خالی نباشد!"),
      check("message").notEmpty().withMessage("پیام تان خالی نباشد!"),
    ];
  }
})();
