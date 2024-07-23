const multer = require("multer");

// l'emplacement de fichier
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
// choisir l'extention de fichier

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("jpg") ||
    file.mimetype.includes("mp4")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// choisir la taille maximal de fichier
const limits = {
  fileSize: 3 * 1024 * 1024, // 2 Mo en octets
};
const upload = multer({
  storage,
  fileFilter,
  limits,
});

module.exports = upload.single("photo");
