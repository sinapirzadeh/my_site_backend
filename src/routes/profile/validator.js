const { check } = require("express-validator");

module.exports = new (class {
  loginValidator() {
    return [
      check("email").isEmail().withMessage("لطفا ایمیل درست وارد کنید"),
      check("password").notEmpty().withMessage("رمز عبور را وارد کنید"),
    ];
  }
})();
