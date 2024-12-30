const controller = require("./../../controller");

module.exports = new (class extends controller {
  async getProflie(req, res) {
    try {
      this.response({ res, data: await this.Proflie.findOne({}) });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }

  async addOrEditProfile(req, res) {
    try {
      let profile = await this.Proflie.findOne({});
      if (profile) {
        await this.Proflie.updateOne({}, { $set: req.body });
        return this.response({ res, message: "proflie updated!" });
      }
      let user = await this.Proflie.create(req.body);
      user.save();
      this.response({ res, message: "proflie add!" });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }
})();
