const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  try {
    const base64 = req.body.photo;
    const base64Data = base64.replace(/^data:([A-Za-z-+/]+);base64,/, '');
    let buff = new Buffer.from(base64Data, 'base64');
    const id = req.body.id_lab;
    const ext = base64.split('/')[1].split(';')[0];
    const photoName = id + '_photo.' + ext;
    // for windows
    const mypath = __dirname + '\\..\\images\\F11\\' + photoName;

    // for linux
    //const mypath = path.join(__dirname + '/../images/F11/' + photoName);

    fs.writeFileSync(mypath, buff);
    res.locals.photoName = photoName;
    next();
  } catch (err) {
    res.status(500).json({ message: 'photo error' });
  }
};
