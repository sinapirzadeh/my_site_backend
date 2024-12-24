const controller = require("./../../controller");
const fs = require("fs");
const path = require("path");

module.exports = new (class extends controller {
  async allArticles(req, res) {
    try {
      this.response({ res, data: await this.Article.find({}) });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }

  async getArticle(req, res) {
    try {
      this.response({
        res,
        data: await this.Article.findById(req.params.id),
      });
    } catch (err) {
      this.errResponse({ res, message: "artilce پیدا نشد" });
    }
  }

  async addArticle(req, res) {
    try {
      if (req.file || req.file.path) {
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        const relativePath = req.file.path.replace(/\\/g, "/");
        const imageUrl = `${baseUrl}/${relativePath}`;

        await this.Article.create({
          ...req.body,
          short_url: nanoid(6),
          image: imageUrl,
        });

        return this.response({ res, message: "Article added!" });
      }

      if (req.file) {
        fs.unlinkSync(path.resolve(req.file.path));
      }
      this.response({ res, message: "image is empty", code: 300 });
    } catch (err) {
      if (req.file) {
        fs.unlinkSync(path.resolve(req.file.path));
      }
      this.errResponse({ res, message: err.message });
    }
  }

  async editArticle(req, res) {
    try {
      this.response({ res, message: "Article edited!" });
    } catch (err) {
      this.errResponse({ res, message: err.message });
    }
  }
})();
