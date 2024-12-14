// const jwt = require("jsonwebtoken");
// const config = require("config");
// const User = require("./../models/user");

// async function isLoggined(req, res, next) {
//   const token = req.header("x-auth-token");
//   if (!token) res.status(401).send("دسترسی شما محدود است");
//   try {
//     const decoded = jwt.verify(token, config.get("jwt_key"));
//     req.user = await User.findById(decoded._id);
//     next();
//   } catch (ex) {
//     res.status(400).send("توکن شما درست نیست");
//   }
// }

// module.exports = {
//   isLoggined,
// };
