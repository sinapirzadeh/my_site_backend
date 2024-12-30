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
    try {
      this.response({
        res,
        data: await this.Article.findOne({ slug: req.params.slug }),
      });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }

  async getLinkArticle(req, res) {
    try {
      const ip =
        req.headers["x-forwarded-for"]?.split(",").shift() ||
        req.socket?.remoteAddress;

      const existingIp = await this.Ips.findOne({ ip: ip });
      if (existingIp) {
        return this.response({
          res,
          message: "شما قبلا نظرت مثبت به این مقاله داده اید",
        });
      }

      let article = await this.Article.findOne({ slug: req.params.slug });
      if (!article) {
        return this.errResponse({
          res,
          message: "مقاله مورد نظر پیدا نشد",
        });
      }

      await this.Article.updateOne(
        { _id: article._id },
        {
          $inc: { like_count: 1 },
        }
      );

      await this.Ips.create({ ip: ip });

      this.response({ res, message: "خوشحالیم که محتوا برایتان مفید بود" });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }

  async postComment(req, res) {
    try {
      await this.ArticleCommet.create(req.body);
      this.response({
        res,
        message: "نظر شما ثپت شد",
      });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }

  async getComments(req, res) {
    try {
      let commetns = await this.ArticleCommet.find({ article: req.body.id });
      this.response({
        res,
        data: commetns,
      });
    } catch (error) {
      this.errResponse({ res, message: "مشکلی به وجود آمده" });
    }
  }
})();
