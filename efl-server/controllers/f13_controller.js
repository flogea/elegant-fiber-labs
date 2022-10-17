const fs = require('fs');
const F13model = require('../models/F13model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class f13_controller {
  // async jsonParse(table) {
  //   console.log(here);
  //   for (const [key, value] of Object.entries(table)) {
  //     if (value === '') {
  //       str += NaN;
  //     }
  //     str += value + '\n';
  //   }
  //   console.log(str);
  // }

  async addData(req, res) {
    try {
      const {
        table1,
        table2,
        table3,
        table4,
        performers,
        group,
        email,
        lab_name,
        id_lab,
        quantity,
        photo,
      } = req.body;
      const photoName = res.locals.photoName;

      const f13 = new F13model({
        data: table1,
      });
      await f13.save();

      const f13_2 = new F13model({
        data: table2,
      });
      await f13_2.save();

      const f13_3 = new F13model({
        data: table3,
      });
      await f13_3.save();

      const f13_4 = new F13model({
        data: table4,
      });
      await f13_4.save();

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
      for (const [key, value] of Object.entries(table1)) {
        if (value === '') {
          str += null;
        }
        str += value + '\n';
      }

      for (const [key, value] of Object.entries(table2)) {
        if (value === '') {
          str += null;
        }
        str += value + '\n';
      }

      for (const [key, value] of Object.entries(table3)) {
        if (value === '') {
          str += null;
        }
        str += value + '\n';
      }

      for (const [key, value] of Object.entries(table4)) {
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

      res.status(201).json({ message: 'success f13' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error f13' });
    }
  }
}

module.exports = new f13_controller();
