const fs = require('fs');
const F11model = require('../models/F11model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class f11_controller {
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
      console.log(req.body);

      const f11 = new F11model({
        data: table1,
      });
      await f11.save();

      const f11_2 = new F11model({
        data: table2,
      });
      await f11_2.save();

      const f11_3 = new F11model({
        data: table3,
      });
      await f11_3.save();

      const f11_4 = new F11model({
        data: table4,
      });
      await f11_4.save();

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

      fs.writeFile(`${id_lab}.txt`, data, (err) => {
        if (err) throw err;
      });

      res.status(201).json({ message: 'success f11' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error f11' });
    }
  }
}

module.exports = new f11_controller();
