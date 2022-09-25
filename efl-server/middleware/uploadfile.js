const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/savePic'); //Здесь указывается путь для сохранения файлов
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const types = ['image/jpeg', 'image/jpg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.minetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
