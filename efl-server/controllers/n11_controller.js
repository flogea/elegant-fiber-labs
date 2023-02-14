const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

const N21model = require('../models/N11model');
const Summary = require('../models/Summary');

class n21_controller {
  async addData(req, res, next) {
    try {
      const { performers, group, email, lab_name, id_lab, quantity, photo, quantTables } = req.body;
      const formData = req.files;
      const photoName = res.locals.photoName;

      console.log(quantTables);

      return 0;

      const reducedData = req.body;
      delete reducedData.performers;
      delete reducedData.group;
      delete reducedData.email;
      delete reducedData.lab_name;
      delete reducedData.id_lab;
      delete reducedData.token;
      delete reducedData.photo;
      delete reducedData.quantity;
      delete reducedData.quantTables;

      for (var oneObj in formData) {
        const ext = formData[oneObj].mimetype.split('/')[1];
        let newFileName;
        switch (oneObj) {
          case 'photo1':
            newFileName = id_lab + '_1_photo.' + ext;
            formData[oneObj].name = id_lab + '_1_photo.' + ext;
            break;
          case 'photo2':
            newFileName = id_lab + '_2_photo.' + ext;
            formData[oneObj].name = id_lab + '_2_photo.' + ext;
            break;
          case 'photo3':
            newFileName = id_lab + '_3_photo.' + ext;
            formData[oneObj].name = id_lab + '_3_photo.' + ext;
            break;
          case 'photo4':
            newFileName = id_lab + '_4_photo.' + ext;
            formData[oneObj].name = id_lab + '_4_photo.' + ext;
            break;
        }

        formData[oneObj].mv(path.join(__dirname, `/../Files/N11/${newFileName}`), (err) => {
          if (err) {
            console.log('error mv files', err);
            res.status(500).json({ message: 'error mv files in n21' });
          }
        });
      }

      const n11 = new N11model({
        id_lab,
        quantTables,
        data: reducedData,
      });
      await n11.save();

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
      for (const [key, value] of Object.entries(reducedData)) {
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
          quantTables +
          '\n' +
          str,
      ];

      fs.writeFile(`${id_lab}.txt`, `${data}`, (err) => {
        if (err) throw err;
      });

      res.status(201).json({ message: 'success n11' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error n11' });
    }
  }
}

module.exports = new n11_controller();
