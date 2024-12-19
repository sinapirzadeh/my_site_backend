const contact = require("../../models/contact");
const controller = require("../controller");

module.exports = new (class extends controller {
  async profile(req, res) {
    try {
      this.response({ res, data: await this.Proflie.findOne({}) });
    } catch (err) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }

  async skills(req, res) {
    try {
      this.response({ res, data: await this.Skill.find({}) });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }

  async blog(req, res) {
    try {
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }

  async addContact(req, res) {
    try {
      let contactForm = await this.Contact.create(req.body);
      contactForm.save();
      this.response({ res, message: "پیام شما ارسال شد." });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }

  async addComment(req, res) {
    try {
      let commentForm = await this.Message.create(req.body);
      commentForm.save();
      this.response({ res, message: "پیام شما ارسال شد" });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود امده است" });
    }
  }
})();
