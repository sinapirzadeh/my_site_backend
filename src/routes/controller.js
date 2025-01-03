const autoBind = require("auto-bind");
const { validationResult } = require("express-validator");
const User = require("../models/user.js");
const Proflie = require("../models/proflie.js");
const Skill = require("../models/skill.js");
const Contact = require("../models/contact.js");
const Message = require("../models/message.js");
const Article = require("../models/article.js");
const ArticleCommet = require("../models/comment.js");
const Ips = require("../models/ips.js");

module.exports = class {
  constructor() {
    autoBind(this);
    this.Article = Article;
    this.User = User;
    this.Proflie = Proflie;
    this.Skill = Skill;
    this.Contact = Contact;
    this.Message = Message;
    this.ArticleCommet = ArticleCommet;
    this.Ips = Ips;
  }

  validationBody(req, res) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const messages = [];
      errors.forEach((err) => messages.push(err.msg));
      res.status(400).json({
        message: "validation error",
        data: messages,
      });
      return false;
    }
    return true;
  }

  validate(req, res, next) {
    if (!this.validationBody(req, res)) return;
    next();
  }

  response({ res, message, code = 200, data = {} }) {
    res.status(code).json({
      message,
      data,
    });
  }

  errResponse({ res, message = "feach! 500 error", code = 500, data = {} }) {
    res.status(code).json({
      message,
      data,
    });
  }
};
