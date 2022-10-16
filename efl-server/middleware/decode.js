const fs = require('fs');
//const path = require('path');

module.exports = (req, res, next) => {
  const base64 = req.body.photo;
  const base64Data = base64.replace(/^data:([A-Za-z-+/]+);base64,/, '');
  let buff = new Buffer.from(base64Data, 'base64');
  console.log(buff);
  const id = req.body.id_lab;
  const name = id + '_photo.png';
  const path = '../images/' + id + '.png';
  fs.writeFileSync('file.png', buff);
  next();
};
