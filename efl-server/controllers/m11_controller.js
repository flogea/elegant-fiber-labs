const fs = require('fs');

const M11model = require('../models/M11model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class m11_controller {
  async saveData(req, res) {
    try {
      const { performers, group, email, lab_name, id_lab } = req.body;
      const formData = req.files;

      for (var oneObj in formData) {
        const newFileName = Date.now() + formData[oneObj].name;
        formData[oneObj].mv(`${__dirname}/../Files/m11/${newFileName}`, (err) => {
          if (err) {
            console.log('error mv files', err);
            res.status(500).json({ message: 'error mv files in m11' });
          }
        });
      }

      const summary = new Summary({
        performers,
        group,
        email,
        lab_name,
        id_lab,
        quantity: 1,
        photo: 'some_string',
      });
      await summary.save();

      res.status(201).json({ message: 'success save m11', id_lab });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: 'error m11' });
    }
  }

  // async addData(req, res) {
  //   try {
  //     const { performers, group, email, lab_name, id_lab, quantity, photo } = req.body;
  //     const photoName = res.locals.photoName;

  //     const f11 = new F11model({
  //       data: table1,
  //     });
  //     await f11.save();

  //     const summary = new Summary({
  //       performers,
  //       group,
  //       email,
  //       lab_name,
  //       id_lab,
  //       photo: photoName,
  //       quantity,
  //     });
  //     await summary.save();

  //     // Запись в текстовый файл
  //     let str = '';
  //     for (const [key, value] of Object.entries(table1)) {
  //       if (value === '') {
  //         str += null;
  //       }
  //       str += value + '\n';
  //     }

  //     for (const [key, value] of Object.entries(table2)) {
  //       if (value === '') {
  //         str += null;
  //       }
  //       str += value + '\n';
  //     }

  //     for (const [key, value] of Object.entries(table3)) {
  //       if (value === '') {
  //         str += null;
  //       }
  //       str += value + '\n';
  //     }

  //     for (const [key, value] of Object.entries(table4)) {
  //       if (value === '') {
  //         str += null;
  //       }
  //       str += value + '\n';
  //     }

  //     let timeId = new Date();
  //     const data = [
  //       id_lab +
  //         '\n' +
  //         format(timeId, 'dd.MM.yyyy HH:mm:ss') +
  //         '\n' +
  //         group +
  //         '\n' +
  //         email +
  //         '\n' +
  //         performers +
  //         '\n' +
  //         quantity +
  //         '\n' +
  //         photoName +
  //         '\n' +
  //         str,
  //     ];

  //     fs.writeFile(`${id_lab}.txt`, `${data}`, (err) => {
  //       if (err) throw err;
  //     });

  //     res.status(201).json({ message: 'success m11' });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({ message: 'error m11' });
  //   }
  // }
}

module.exports = new m11_controller();
