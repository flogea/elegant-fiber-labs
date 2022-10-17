const fs = require('fs');

module.exports = (req, res, next) => {
  const base64 = req.body.photo;
  const base64Data = base64.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  let buff = new Buffer.from(base64Data, 'base64');
  const id = req.body.id_lab;
  const ext = base64.split('/')[1].split(';')[0];
  const photoName = id + '_photo.' + ext;
  const path = __dirname + '\\..\\images\\F11\\' + photoName;
  fs.writeFileSync(path, buff);
  res.locals.photoName = photoName;
  next();
};
