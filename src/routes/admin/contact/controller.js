const controller = require("./../../controller");

module.exports = new (class extends controller {
  async getContacts(req, res) {
    try {
      this.response({
        res,
        data: await this.Contact.find().sort({ is_read: 1, updatedAt: -1 }),
      });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمد" });
    }
  }

  async setIsRead(req, res) {
    try {
      let isRead = await this.Contact.findByIdAndUpdate(
        req.params.id,
        { is_read: true },
        { new: true }
      );
      if (!isRead) return this.response({ req, message: "تماس پیدا نشد!" });
      this.response({ res, data: isRead });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی پیش آمد" });
    }
  }

  async delContact(req, res) {
    try {
      let { deletedCount } = await this.Contact.deleteOne({
        _id: req.params.id,
      });
      if (deletedCount == 0)
        return this.response({ req, message: "تماس پیدا نشد!" });
      this.response({ req, message: "پیام با موفقیت پاک شد" });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی پیش آمد" });
    }
  }
})();
