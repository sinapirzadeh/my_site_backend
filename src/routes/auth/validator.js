const { check } = require("express-validator");

module.exports = new (class {
  loginValidator() {
    return [
      check("username").notEmpty().withMessage("username is a empty"),
      check("password").notEmpty().withMessage("password is a empty"),
    ];
  }
})();
