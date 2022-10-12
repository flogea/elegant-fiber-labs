const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './images/'); //Здесь указывается путь для сохранения файлов
  },
  filename(req, file, cb) {
    console.log('mv', req.file);
    const id = req.body.id_lab;
    const ext = file.mimetype.split('/')[1];
    cb(null, id + '_photo.' + ext);
  },
});

const types = ['image/jpeg', 'image/jpg', 'image/png'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
