const controller = require("./../../controller");

module.exports = new (class extends controller {
  async allSkill(req, res) {
    try {
      this.response({ res, data: await this.Skill.find({}) });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }

  async addSkill(req, res) {
    try {
      let user = await this.Skill.create(req.body);
      user.save();
      this.response({ res, message: "proflie add!" });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }

  async delSkill(req, res) {
    try {
      await this.Skill.deleteOne(req.body.id);
      this.response({
        req,
        message: "proflie is deleted!",
      });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }
})();
