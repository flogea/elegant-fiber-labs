const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

const N11model = require('../models/N11model');
const Summary = require('../models/Summary');

class n11_controller {
  async addData(req, res, next) {
    try {
      const { performers, group, email, lab_name, id_lab, quantity, photo, quantTables } = req.body;
      const formData = req.files;
      const photoName = res.locals.photoName;
      res.locals.lab_name = lab_name;

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

      await N11model.find({ id_lab }).then(async (result) => {
        if (result.length === 0) {
          try {
            const n11 = new N11model({
              id_lab,
              quantTables,
              data: reducedData,
              photo1: formData.photo1 === undefined ? null : formData.photo1.name,
              photo2: formData.photo2 === undefined ? null : formData.photo2.name,
              photo3: formData.photo3 === undefined ? null : formData.photo3.name,
              photo4: formData.photo4 === undefined ? null : formData.photo4.name,
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
          } catch (error) {
            console.log('error save n11', error.message);
            res.status(500).json({ message: 'error save n11' });
          }
        } else {
          try {
            N11model.findOneAndUpdate(
              { id_lab },
              {
                quantTables,
                data: reducedData,
                photo1: formData.photo1 === undefined ? null : formData.photo1.name,
                photo2: formData.photo2 === undefined ? null : formData.photo2.name,
                photo3: formData.photo3 === undefined ? null : formData.photo3.name,
                photo4: formData.photo4 === undefined ? null : formData.photo4.name,
              },
              (err) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({ message: 'error update n11' });
                }
              },
            );

            Summary.findOneAndUpdate({ id_lab }, { performers, group, email, quantity }, (err) => {
              if (err) {
                console.log(err);
                res.status(500).json({ message: 'error update summary' });
              }
            });
            next();
          } catch (error) {
            console.log(err);
            res.status(500).json({ message: 'error update' });
          }
        }
      });

      // Запись в текстовый файл
      let str = '';
      for (const [key, value] of Object.entries(reducedData)) {
        if (value === '') {
          str += null;
        }
        str += value + '\n';
      }

      for (let i = Object.entries(reducedData).length; i < 124; i++) {
        str += null + '\n';
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
          quantTables +
          '\n' +
          str +
          (formData.photo1 === undefined ? null : formData.photo1.name) +
          '\n' +
          (formData.photo2 === undefined ? null : formData.photo2.name) +
          '\n' +
          (formData.photo3 === undefined ? null : formData.photo3.name) +
          '\n' +
          (formData.photo4 === undefined ? null : formData.photo4.name),
      ];

      fs.writeFile(`${id_lab}_${lab_name}.txt`, `${data}`, (err) => {
        if (err) throw err;
      });

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error n11' });
    }
  }
}

module.exports = new n11_controller();
