const { check } = require("express-validator");

module.exports = new (class {
  articleValidation() {
    return [
      check("title").notEmpty().withMessage("Title is required."),

      check("slug")
        .notEmpty()
        .withMessage("Slug is required.")
        .isSlug()
        .withMessage(
          "Slug must be a valid slug (e.g., no spaces or special characters)."
        ),

      check("image_alt").notEmpty().withMessage("Image Alt is required."),

      check("description").notEmpty().withMessage("Description is required."),

      check("related_articles")
        .optional()
        .isArray()
        .withMessage("Related Articles must be an array of ObjectIds.")
        .custom((values) => {
          if (!values.every((id) => /^[a-fA-F0-9]{24}$/.test(id))) {
            throw new Error("Each related article must be a valid ObjectId.");
          }
          return true;
        }),

      check("comments")
        .optional()
        .isMongoId()
        .withMessage("Comments must be a valid MongoDB ObjectId."),

      check("meta_description")
        .optional()
        .isLength({ max: 160 })
        .withMessage("Meta Description must not exceed 160 characters."),

      check("meta_keywords")
        .optional()
        .isArray()
        .withMessage("Meta Keywords must be an array of strings.")
        .custom((values) => {
          if (!values.every((keyword) => typeof keyword === "string")) {
            throw new Error("Each meta keyword must be a string.");
          }
          return true;
        }),
    ];
  }
})();
