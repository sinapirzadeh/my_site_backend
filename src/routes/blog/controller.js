const controller = require("../controller");

module.exports = new (class extends controller {
  async blog(req, res) {
    try {
      const articles = await this.Article.aggregate([
        { $match: { is_delete: false } },
        {
          $lookup: {
            from: "comments",
            localField: "comments",
            foreignField: "_id",
            as: "comments",
          },
        },
        {
          $addFields: {
            comments_count: { $size: { $ifNull: ["$comments", []] } },
          },
        },
        {
          $project: {
            meta_description: 0,
            meta_keywords: 0,
            description: 0,
            related_articles: 0,
          },
        },
      ]);

      this.response({ res, data: articles });
    } catch (err) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }

  async getArticle(req, res) {
    console.log('1', 1, )
    try {
      this.response({
        res,
        data: await this.Article.findOne({ slug: req.params.slug }),
      });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }
})();
