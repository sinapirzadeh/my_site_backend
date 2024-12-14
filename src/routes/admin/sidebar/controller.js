const controller = require("../../controller");

module.exports = new (class extends controller {
  async getLength(req, res) {
    try {
      let len_con = await this.Contact.countDocuments({ is_read: false });
      let len_msg = await this.Message.countDocuments({ is_read: false });
      this.response({
        res,
        data: { len_con, len_msg },
      });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمد" });
    }
  }
})();
