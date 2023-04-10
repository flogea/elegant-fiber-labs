const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

const F13model = require('../models/F13model');
const Summary = require('../models/Summary');

class f13_controller {
  async addData(req, res, next) {
    const { table1, table2, table3, table4, performers, group, email, lab_name, id_lab, quantity } =
      req.body;
    const formData = req.files;

    console.log(formData);

    let photoName = '';
    if (formData) {
      photoName = id_lab + '_photo.png';
      formData.avatar.name = id_lab + '_photo.png';

      formData.avatar.mv(path.join(__dirname, `/../Files/${lab_name}/${photoName}`), (err) => {
        if (err) {
          console.log('error mv files', err);
          res.status(500).json({ message: 'error mv files in f13' });
        }
      });
    }

    try {
      F13model.findOne({ id_lab }).then(async (result) => {
        if (result) {
          // IF DOUBLE CLICKED ON SAVE BUTTON
          try {
            res.locals.data = result;
            res.locals.id_lab = id_lab;

            await F13model.findOneAndUpdate(
              { id_lab },
              {
                table1: JSON.parse(table1),
                table2: JSON.parse(table2),
                table3: JSON.parse(table3),
                table4: JSON.parse(table4),
              },
              {
                new: true,
              },
              (err, doc) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({ message: 'error update f13' });
                } else {
                  console.log(doc);
                }
              },
            ).clone();
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'error update f13' });
          }

          Summary.findOne({ id_lab }).then(async (result) => {
            try {
              await Summary.findOneAndUpdate(
                { id_lab },
                {
                  performers: performers === undefined ? result.performers : performers,
                  group: group === undefined ? result.group : group,
                  email: email === undefined ? result.email : email,
                  quantity: quantity === undefined ? result.quantity : quantity,
                  photo:
                    formData === null
                      ? null
                      : formData.avatar === undefined
                      ? null
                      : formData.avatar.name,
                },
                {
                  new: true,
                },
                (err, doc) => {
                  if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'error update summary' });
                  } else {
                    console.log(doc);
                  }
                },
              ).clone;
            } catch (error) {
              console.log(error);
              res.status(500).json({ message: 'error update summary' });
            }
          });

          next();
        } else {
          // CREATE NEW DATA
          try {
            const f13 = new F13model({
              id_lab,
              table1: JSON.parse(table1),
              table2: JSON.parse(table2),
              table3: JSON.parse(table3),
              table4: JSON.parse(table4),
            });
            await f13.save();

            const summary = new Summary({
              performers,
              group,
              email,
              lab_name,
              id_lab,
              quantity,
              photo:
                formData === null
                  ? null
                  : formData.avatar === undefined
                  ? null
                  : formData.avatar.name,
            });
            await summary.save();
            res.locals.id_lab = id_lab;
            next();
          } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'error f13' });
          }
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }

    try {
      const result = JSON.parse(table1).concat(
        JSON.parse(table2),
        JSON.parse(table3),
        JSON.parse(table4),
      );

      // Запись в текстовый файл
      let str = '';
      for (let i = 0; i < result.length; i++) {
        str += `${result[i]}` + '\n';
      }

      console.log(formData.avatar);

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
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error f13' });
    }
  }
}

module.exports = new f13_controller();
