const controller = require("./../../controller");

module.exports = new (class extends controller {
  async getProflie(req, res) {
    try {
      this.response({ res, data: await this.Proflie.findOne({}) });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }

  async addProflie(req, res) {
    try {
      let user = await this.Proflie.create(req.body);
      user.save();
      this.response({ res, message: "proflie add!" });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }

  async editProflie(req, res) {
    try {
      await this.Proflie.updateOne({}, { $set: req.body });
      this.response({ res, message: "proflie updated!" });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }

  async delProflie(req, res) {
    try {
      await this.Proflie.deleteOne();
      this.response({
        req,
        message: "proflie is deleted!",
      });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }
})();
