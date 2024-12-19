// multerConfig.js
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// مسیر ذخیره‌سازی
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = "uploads";
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }
    cb(null, uploadsDir); // مسیر ذخیره فایل‌ها
  },
  filename: (req, file, cb) => {
    // نام فایل را به صورت زمان‌دار برای جلوگیری از تکراری بودن نام‌ها انتخاب می‌کنیم
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// فیلتر کردن انواع فایل‌ها (مثلاً فقط تصاویر)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG and GIF are allowed."));
  }
};

// تنظیمات Multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
