const fs = require('fs');
const F12model = require('../models/F12model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class f12_controller {
  async addData(req, res) {
    try {
      const {
        table12,
        table12_1,
        table12_2,
        table12_3,
        performers,
        group,
        email,
        lab_name,
        id_lab,
        quantity,
        photo,
      } = req.body;
      const photoName = res.locals.photoName;

      const f12 = new F12model({
        data: table12_1,
      });
      await f12.save();

      const f12_2 = new F12model({
        data: table12_2,
      });
      await f12_2.save();

      const f12_3 = new F12model({
        data: table12_3,
      });
      await f12_3.save();

      const summary = new Summary({
        performers,
        group,
        email,
        lab_name,
        id_lab,
        photo: photoName,
        quantity,
      });
      await summary.save();

      // Запись в текстовый файл
      let str = '';
      for (const [key, value] of Object.entries(table12_1)) {
        if (value === '') {
          str += null;
        }
        str += value + '\n';
      }

      for (const [key, value] of Object.entries(table12_2)) {
        if (value === '') {
          str += null;
        }
        str += value + '\n';
      }

      for (const [key, value] of Object.entries(table12_3)) {
        if (value === '') {
          str += null;
        }
        str += value + '\n';
      }

      let timeId = new Date();
      const data = [
        id_lab +
          '\n' +
          format(timeId, 'dd.MM.yyyy HH:mm:ss') +
          '\n' +
          group +
          '\n' +
          email +
          '\n' +
          performers +
          '\n' +
          quantity +
          '\n' +
          photoName +
          '\n' +
          str,
      ];

      fs.writeFile(`${id_lab}.txt`, `${data}`, (err) => {
        if (err) throw err;
      });

      res.status(201).json({ message: 'success f12' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error f12' });
    }
  }
}

module.exports = new f12_controller();
