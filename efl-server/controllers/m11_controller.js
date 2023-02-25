const fs = require('fs');
const path = require('path');

const M11model = require('../models/M11model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class m11_controller {
  async getData(req, res) {
    try {
      const { id } = req.params;
      const m11Obj = await M11model.find({ id_lab: id })
        .then((result) => {
          return result;
        })
        .catch((err) => res.status(500).json(err));

      const summaryObj = await Summary.find({ id_lab: id })
        .then((result) => {
          return result;
        })
        .catch((err) => res.status(500).json(err));

      //const results = { ...summaryObj[0], ...m11Obj[0] };
      const result = summaryObj.concat(m11Obj);

      //const result = Object.assign(summaryObj, m11Obj[0]);
      console.log(result);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error.message);
      res.status(500).json('error save m11 data ', error);
    }
  }

  async saveData(req, res, next) {
    try {
      const { performers, group, email, lab_name, quantity, data, letterOne, letterTwo, labId } =
        req.body;
      var { id_lab } = req.body;
      const formData = req.files;
      const dataArray = data.split(',');

      for (var oneObj in formData) {
        let newFileName;
        switch (oneObj) {
          case 'file1':
            newFileName = id_lab + '_111_sch.pdf';
            formData[oneObj].name = id_lab + '_111_sch.pdf';
            break;
          case 'file2':
            newFileName = id_lab + '_111_rtl.pdf';
            formData[oneObj].name = id_lab + '_111_rtl.pdf';
            break;
          case 'file3':
            newFileName = id_lab + '_111_sim.png';
            formData[oneObj].name = id_lab + '_111_sim.png';
            break;
          case 'file4':
            newFileName = id_lab + '_112_code.v';
            formData[oneObj].name = id_lab + '_112_code.v';
            break;
          case 'file5':
            newFileName = id_lab + '_112_rtl.pdf';
            formData[oneObj].name = id_lab + '_112_rtl.pdf';
            break;
          case 'file6':
            newFileName = id_lab + '_112_sim.png';
            formData[oneObj].name = id_lab + '_112_sim.png';
            break;
        }

        formData[oneObj].mv(path.join(__dirname, `/../Files/M11/${newFileName}`), (err) => {
          if (err) {
            console.log('error mv files', err);
            res.status(500).json({ message: 'error mv files in m11' });
          }
        });
      }
      console.log(labId);
      if (labId !== '') {
        id_lab = labId;
      }
      console.log(labId);
      await M11model.find({ id_lab })
        .then(async (result) => {
          console.log(result);
          if (result.length === 0) {
            try {
              const m11 = new M11model({
                id_lab,
                letterOne,
                letterTwo,
                1: dataArray[0],
                2: dataArray[1],
                3: dataArray[2],
                4: dataArray[3],
                5: dataArray[4],
                6: dataArray[5],
                7: dataArray[6],
                8: dataArray[7],
                9: dataArray[8],
                10: dataArray[9],
                11: dataArray[10],
                12: dataArray[11],
                13: dataArray[12],
                14: dataArray[13],
                15: dataArray[14],
                16: dataArray[15],
                17: dataArray[16],
                18: dataArray[17],
                19: dataArray[18],
                20: dataArray[19],
                21: dataArray[20],
                22: dataArray[21],
                23: dataArray[22],
                24: dataArray[23],
                file1: formData.file1 === undefined ? null : formData.file1.name,
                file2: formData.file2 === undefined ? null : formData.file2.name,
                file3: formData.file3 === undefined ? null : formData.file3.name,
                file4: formData.file4 === undefined ? null : formData.file4.name,
                file5: formData.file5 === undefined ? null : formData.file5.name,
                file6: formData.file6 === undefined ? null : formData.file6.name,
              });
              await m11.save();

              const summary = new Summary({
                performers,
                group,
                email,
                lab_name,
                id_lab,
                quantity,
              });
              await summary.save();
              res.locals.id_lab = id_lab;
              next();
            } catch (error) {
              console.log(err.message);
              res.status(500).json({ message: 'error m11' });
            }
          } else {
            try {
              res.locals.data = result;
              await M11model.findOneAndUpdate(
                ({ id_lab },
                {
                  file1: formData.file1 === undefined ? null : formData.file1.name,
                  file2: formData.file2 === undefined ? null : formData.file2.name,
                  file3: formData.file3 === undefined ? null : formData.file3.name,
                  file4: formData.file4 === undefined ? null : formData.file4.name,
                  file5: formData.file5 === undefined ? null : formData.file5.name,
                  file6: formData.file6 === undefined ? null : formData.file6.name,
                },
                {
                  new: true,
                }),
                (err, doc) => {
                  if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'error update m11' });
                  }
                  return doc;
                },
              );

              await Summary.findOneAndUpdate(
                ({ id_lab },
                { performers, group, email, quantity },
                {
                  new: true,
                }),
                (err, doc) => {
                  if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'error update summary' });
                  }
                  return doc;
                },
              );
              res.locals.id_lab = labId;
              next();
            } catch (error) {
              console.log(err);
              res.status(500).json({ message: 'error update' });
            }
          }
          //next();
        })
        .catch((err) => res.status(500).json(err));
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: 'error m11' });
    }
  }

  async addData(req, res, next) {
    try {
      const id_lab = res.locals.id_lab;
      await M11model.find({ id_lab })
        .then(async (result) => {
          if (result.length === 0) {
            try {
              const {
                performers,
                group,
                email,
                id_lab,
                lab_name,
                quantity,
                data,
                letterOne,
                letterTwo,
              } = req.body;
              const formData = req.files;
              const dataArray = data.split(',');

              let str = '';
              for (const [key, value] of Object.entries(dataArray)) {
                if (value === '') {
                  str += null;
                }
                str += value + '\n';
              }

              let timeId = new Date();
              const newData = [
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
                  str +
                  letterOne +
                  '\n' +
                  letterTwo +
                  '\n' +
                  (formData.file1 === undefined ? null : formData.file1.name) +
                  '\n' +
                  (formData.file2 === undefined ? null : formData.file2.name) +
                  '\n' +
                  (formData.file3 === undefined ? null : formData.file3.name) +
                  '\n' +
                  (formData.file4 === undefined ? null : formData.file4.name) +
                  '\n' +
                  (formData.file5 === undefined ? null : formData.file5.name) +
                  '\n' +
                  (formData.file6 === undefined ? null : formData.file6.name),
              ];

              fs.writeFile(`${id_lab}_${lab_name}.txt`, `${newData}`, (err) => {
                if (err) throw err;
              });
              next();
            } catch (error) {
              console.log(err.message);
              res.status(500).json({ message: 'error m11' });
            }
          } else {
            try {
              const m11Obj = await M11model.find({ id_lab })
                .then((result) => {
                  return result;
                })
                .catch((err) => res.status(500).json(err));

              const summaryObj = await Summary.find({ id_lab })
                .then((result) => {
                  return result;
                })
                .catch((err) => res.status(500).json(err));

              const { group, email, performers, lab_name } = summaryObj[0];
              const { letterOne, letterTwo, file1, file2, file3, file4, file5, file6 } = m11Obj[0];
              const { quantity } = req.body;
              console.log(m11Obj);

              console.log(file1, file2, file3, file4, file5, file6);

              const dataArray = m11Obj[0]._doc;
              delete dataArray.id_lab;
              delete dataArray.letterOne;
              delete dataArray.letterTwo;
              delete dataArray.file1;
              delete dataArray.file2;
              delete dataArray.file3;
              delete dataArray.file4;
              delete dataArray.file5;
              delete dataArray.file6;
              delete dataArray._id;
              delete dataArray.__v;

              let str = '';
              for (const [key, value] of Object.entries(dataArray)) {
                if (value === '') {
                  str += null;
                }
                str += value + '\n';
              }

              console.log(str);

              let timeId = new Date();
              const newData = [
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
                  str +
                  letterOne +
                  '\n' +
                  letterTwo +
                  '\n',
                (file1 === undefined ? null : file1.name) +
                  '\n' +
                  (file2 === undefined ? null : file2.name) +
                  '\n' +
                  (file3 === undefined ? null : file3.name) +
                  '\n' +
                  (file4 === undefined ? null : file4.name) +
                  '\n' +
                  (file5 === undefined ? null : file5.name) +
                  '\n' +
                  (file6 === undefined ? null : file6.name),
              ];

              console.log(newData);

              fs.writeFile(`${id_lab}_${lab_name}.txt`, `${newData}`, (err) => {
                if (err) throw err;
              });
              next();
            } catch (error) {
              console.log(err);
              res.status(500).json({ message: 'error update' });
            }
          }
        })
        .catch((err) => res.status(500).json(err));

      //next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error m11' });
    }
  }
}

module.exports = new m11_controller();
