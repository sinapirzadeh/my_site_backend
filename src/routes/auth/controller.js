const controller = require("./../controller");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = new (class extends controller {
  async login(req, res) {
    try {
      let user = await this.User.findOne({ username: req.body.username });
      if (user) {
        let isPass = await bcrypt.compare(req.body.password, user.password);
        if (isPass) {
          let token = jwt.sign({ _id: user.id }, config.get("jwt_key"));
          return this.response({
            res,
            message: "login is a successfull!",
            data: token,
          });
        }
      }
      this.response({ res, message: "کاربری پیدا نشد" });
    } catch (err) {
      this.errResponse({ res, message: "مشکلی بیش امد!" });
    }
  }
})();
