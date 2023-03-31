const fs = require('fs');
const path = require('path');

const M13model = require('../models/M13model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class m13_controller {
  async getData(req, res) {
    try {
      const { id } = req.params;
      console.log(req.params);
      const m13Obj = await M13model.find({ id_lab: id })
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
      const result = summaryObj.concat(m13Obj);

      //const result = Object.assign(summaryObj, m11Obj[0]);
      console.log(result);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error.message);
      res.status(500).json('error save m13 data ', error);
    }
  }

  async saveData(req, res, next) {
    // GET DATA
    try {
      const {
        performers,
        group,
        email,
        id_lab,
        lab_name,
        quantity,
        labId,
        range1,
        hex1,
        range2,
        hex2,
        additionalArray,
        lastRange1,
        lastRange2,
      } = req.body;
      const formData = req.files;
      //const dataArray = arrayOfTable.split(',');

      // RENAME FILES AND WRITE DATA TO FILE
      if (formData !== null) {
        for (var oneObj in formData) {
          let newFileName;
          switch (oneObj) {
            case 'file1':
              newFileName = id_lab + '_131_dc.v';
              formData[oneObj].name = id_lab + '_131_dc.v';
              break;
            case 'file2':
              newFileName = id_lab + '_131_rtl.pdf';
              formData[oneObj].name = id_lab + '_131_rtl.pdf';
              break;
            case 'file3':
              newFileName = id_lab + '_131_sim.png';
              formData[oneObj].name = id_lab + '_131_sim.png';
              break;
            case 'file4':
              newFileName = id_lab + '_132_cd.v';
              formData[oneObj].name = id_lab + '_132_cd.v';
              break;
            case 'file5':
              newFileName = id_lab + '_132_rtl.pdf';
              formData[oneObj].name = id_lab + '_132_rtl.pdf';
              break;
            case 'file6':
              newFileName = id_lab + '_132_sim.png';
              formData[oneObj].name = id_lab + '_132_sim.png';
              break;
            case 'file7':
              newFileName = id_lab + '_133_add.v';
              formData[oneObj].name = id_lab + '_133_add.v';
              break;
            case 'file8':
              newFileName = id_lab + '_133_sim.png';
              formData[oneObj].name = id_lab + '_133_sim.png';
              break;
            case 'file9':
              newFileName = id_lab + '_134_add.v';
              formData[oneObj].name = id_lab + '_134_add.v';
              break;
            case 'file10':
              newFileName = id_lab + '_134_sim.png';
              formData[oneObj].name = id_lab + '_134_sim.png';
              break;
            case 'file11':
              newFileName = id_lab + '_135_add.v';
              formData[oneObj].name = id_lab + '_135_add.v';
              break;
            case 'file12':
              newFileName = id_lab + '_135_rtl.pdf';
              formData[oneObj].name = id_lab + '_135_rtl.pdf';
              break;
            case 'file13':
              newFileName = id_lab + '_135_sim.png';
              formData[oneObj].name = id_lab + '_135_sim.png';
              break;
            case 'file1_1':
              newFileName = id_lab + '_1351_pr.png';
              formData[oneObj].name = id_lab + '_1351_pr.png';
              break;
            case 'file2_1':
              newFileName = id_lab + '_1352_pr.png';
              formData[oneObj].name = id_lab + '_1352_pr.png';
              break;
            case 'file3_1':
              newFileName = id_lab + '_1353_pr.png';
              formData[oneObj].name = id_lab + '_1353_pr.png';
              break;
            case 'file4_1':
              newFileName = id_lab + '_1354_pr.png';
              formData[oneObj].name = id_lab + '_1354_pr.png';
              break;
          }

          formData[oneObj].mv(path.join(__dirname, `/../Files/M13/${newFileName}`), (err) => {
            if (err) {
              console.log('error mv files', err);
              res.status(500).json({ message: 'error mv files in m13' });
            }
          });
        }
      }

      // IF LAB IS CONTINUED
      if (labId) {
        res.locals.id_lab = labId;
        M13model.findOne({ id_lab: labId })
          .then(async (result) => {
            try {
              res.locals.data = result;
              await M13model.findOneAndUpdate(
                { id_lab: labId },
                {
                  file1:
                    formData === null
                      ? null
                      : formData.file1 === undefined
                      ? result.file1
                      : formData.file1.name,
                  file2:
                    formData === null
                      ? null
                      : formData.file2 === undefined
                      ? result.file2
                      : formData.file2.name,
                  file3:
                    formData === null
                      ? null
                      : formData.file3 === undefined
                      ? result.file3
                      : formData.file3.name,
                  file4:
                    formData === null
                      ? null
                      : formData.file4 === undefined
                      ? result.file4
                      : formData.file4.name,
                  file5:
                    formData === null
                      ? null
                      : formData.file5 === undefined
                      ? result.file5
                      : formData.file5.name,
                  file6:
                    formData === null
                      ? null
                      : formData.file6 === undefined
                      ? result.file6
                      : formData.file6.name,
                  file7:
                    formData === null
                      ? null
                      : formData.file7 === undefined
                      ? result.file7
                      : formData.file7.name,
                  file8:
                    formData === null
                      ? null
                      : formData.file8 === undefined
                      ? result.file8
                      : formData.file8.name,
                  file9:
                    formData === null
                      ? null
                      : formData.file9 === undefined
                      ? result.file9
                      : formData.file9.name,
                  file10:
                    formData === null
                      ? null
                      : formData.file10 === undefined
                      ? result.file10
                      : formData.file10.name,
                  file11:
                    formData === null
                      ? null
                      : formData.file11 === undefined
                      ? result.file11
                      : formData.file11.name,
                  file12:
                    formData === null
                      ? null
                      : formData.file12 === undefined
                      ? result.file12
                      : formData.file12.name,
                  file13:
                    formData === null
                      ? null
                      : formData.file13 === undefined
                      ? result.file13
                      : formData.file13.name,
                  file1_1:
                    formData === null
                      ? null
                      : formData.file1_1 === undefined
                      ? null
                      : formData.file1_1.name,
                  file2_1:
                    formData === null
                      ? null
                      : formData.file2_1 === undefined
                      ? null
                      : formData.file2_1.name,
                  file3_1:
                    formData === null
                      ? null
                      : formData.file3_1 === undefined
                      ? null
                      : formData.file3_1.name,
                  file4_1:
                    formData === null
                      ? null
                      : formData.file4_1 === undefined
                      ? null
                      : formData.file4_1.name,
                },
                {
                  new: true,
                },
                (err, doc) => {
                  if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'error update m13' });
                  } else {
                    console.log(doc);
                  }
                },
              ).clone();

              console.log(res.locals.id_lab);
            } catch (error) {
              console.log(error);
              res.status(500).json({ message: 'error update m13' });
            }
          })
          .catch((err) => res.status(500).json(err));

        Summary.findOne({ id_lab: labId }).then(async (result) => {
          try {
            await Summary.findOneAndUpdate(
              { id_lab: labId },
              {
                performers: performers === undefined ? result.performers : performers,
                group: group === undefined ? result.group : group,
                email: email === undefined ? result.email : email,
                quantity: quantity === undefined ? result.quantity : quantity,
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
        try {
          M13model.findOne({ id_lab }).then(async (result) => {
            if (result) {
              // IF DOUBLE CLICKED ON SAVE BUTTON
              try {
                res.locals.data = result;
                res.locals.id_lab = id_lab;

                await M13model.findOneAndUpdate(
                  { id_lab },
                  {
                    file1:
                      formData === null
                        ? null
                        : formData.file1 === undefined
                        ? result.file1
                        : formData.file1.name,
                    file2:
                      formData === null
                        ? null
                        : formData.file2 === undefined
                        ? result.file2
                        : formData.file2.name,
                    file3:
                      formData === null
                        ? null
                        : formData.file3 === undefined
                        ? result.file3
                        : formData.file3.name,
                    file4:
                      formData === null
                        ? null
                        : formData.file4 === undefined
                        ? result.file4
                        : formData.file4.name,
                    file5:
                      formData === null
                        ? null
                        : formData.file5 === undefined
                        ? result.file5
                        : formData.file5.name,
                    file6:
                      formData === null
                        ? null
                        : formData.file6 === undefined
                        ? result.file6
                        : formData.file6.name,
                    file7:
                      formData === null
                        ? null
                        : formData.file7 === undefined
                        ? result.file7
                        : formData.file7.name,
                    file8:
                      formData === null
                        ? null
                        : formData.file8 === undefined
                        ? result.file8
                        : formData.file8.name,
                    file9:
                      formData === null
                        ? null
                        : formData.file9 === undefined
                        ? result.file9
                        : formData.file9.name,
                    file10:
                      formData === null
                        ? null
                        : formData.file10 === undefined
                        ? result.file10
                        : formData.file10.name,
                    file11:
                      formData === null
                        ? null
                        : formData.file11 === undefined
                        ? result.file11
                        : formData.file11.name,
                    file12:
                      formData === null
                        ? null
                        : formData.file12 === undefined
                        ? result.file12
                        : formData.file12.name,
                    file13:
                      formData === null
                        ? null
                        : formData.file13 === undefined
                        ? result.file13
                        : formData.file13.name,
                    file1_1:
                      formData === null
                        ? null
                        : formData.file1_1 === undefined
                        ? null
                        : formData.file1_1.name,
                    file2_1:
                      formData === null
                        ? null
                        : formData.file2_1 === undefined
                        ? null
                        : formData.file2_1.name,
                    file3_1:
                      formData === null
                        ? null
                        : formData.file3_1 === undefined
                        ? null
                        : formData.file3_1.name,
                    file4_1:
                      formData === null
                        ? null
                        : formData.file4_1 === undefined
                        ? null
                        : formData.file4_1.name,
                  },
                  {
                    new: true,
                  },
                  (err, doc) => {
                    if (err) {
                      console.log(err);
                      res.status(500).json({ message: 'error update m13' });
                    } else {
                      console.log(doc);
                    }
                  },
                ).clone();
              } catch (error) {
                console.log(error);
                res.status(500).json({ message: 'error update m13' });
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
                const m13 = new M13model({
                  id_lab,
                  range1: JSON.parse(range1),
                  hex1: JSON.parse(hex1),
                  lastRange1: JSON.parse(lastRange1),
                  range2: JSON.parse(range2),
                  hex2: JSON.parse(hex2),
                  lastRange2: JSON.parse(lastRange2),
                  additionalArray: JSON.parse(additionalArray),
                  file1:
                    formData === null
                      ? null
                      : formData.file1 === undefined
                      ? result.file1
                      : formData.file1.name,
                  file2:
                    formData === null
                      ? null
                      : formData.file2 === undefined
                      ? result.file2
                      : formData.file2.name,
                  file3:
                    formData === null
                      ? null
                      : formData.file3 === undefined
                      ? result.file3
                      : formData.file3.name,
                  file4:
                    formData === null
                      ? null
                      : formData.file4 === undefined
                      ? result.file4
                      : formData.file4.name,
                  file5:
                    formData === null
                      ? null
                      : formData.file5 === undefined
                      ? result.file5
                      : formData.file5.name,
                  file6:
                    formData === null
                      ? null
                      : formData.file6 === undefined
                      ? result.file6
                      : formData.file6.name,
                  file7:
                    formData === null
                      ? null
                      : formData.file7 === undefined
                      ? result.file7
                      : formData.file7.name,
                  file8:
                    formData === null
                      ? null
                      : formData.file8 === undefined
                      ? result.file8
                      : formData.file8.name,
                  file9:
                    formData === null
                      ? null
                      : formData.file9 === undefined
                      ? result.file9
                      : formData.file9.name,
                  file10:
                    formData === null
                      ? null
                      : formData.file10 === undefined
                      ? result.file10
                      : formData.file10.name,
                  file11:
                    formData === null
                      ? null
                      : formData.file11 === undefined
                      ? result.file11
                      : formData.file11.name,
                  file12:
                    formData === null
                      ? null
                      : formData.file12 === undefined
                      ? result.file12
                      : formData.file12.name,
                  file13:
                    formData === null
                      ? null
                      : formData.file13 === undefined
                      ? result.file13
                      : formData.file13.name,
                  file1_1:
                    formData === null
                      ? null
                      : formData.file1_1 === undefined
                      ? null
                      : formData.file1_1.name,
                  file2_1:
                    formData === null
                      ? null
                      : formData.file2_1 === undefined
                      ? null
                      : formData.file2_1.name,
                  file3_1:
                    formData === null
                      ? null
                      : formData.file3_1 === undefined
                      ? null
                      : formData.file3_1.name,
                  file4_1:
                    formData === null
                      ? null
                      : formData.file4_1 === undefined
                      ? null
                      : formData.file4_1.name,
                });
                await m13.save();

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
                console.log(error.message);
                res.status(500).json({ message: 'error m13' });
              }
            }
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: error });
        }
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: 'error m13' });
    }
  }

  async addData(req, res, next) {
    try {
      const id_lab = res.locals.id_lab;
      console.log(id_lab);
      await M13model.find({ id_lab })
        .then(async (result) => {
          if (result.length === 0) {
            try {
              console.log('first');
              const { performers, group, email, lab_name, quantity, data } = req.body;
              const formData = req.files;
              res.locals.lab_name = lab_name;
              console.log(formData);
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
              console.log(error.message);
              res.status(500).json({ message: 'error m13' });
            }
          } else {
            try {
              console.log('second');
              // const {
              //   performers,
              //   group,
              //   email,
              //   id_lab,
              //   lab_name,
              //   quantity,
              //   data,
              //   letterOne,
              //   letterTwo,
              // } = req.body;
              // const formData = req.files;
              // const dataArray = data.split(',');
              const id_lab = res.locals.id_lab;

              const m13Obj = await M13model.find({ id_lab })
                .then((result) => {
                  console.log(result);
                  return result;
                })
                .catch((err) => res.status(500).json(err));

              const summaryObj = await Summary.find({ id_lab })
                .then((result) => {
                  console.log(result);
                  return result;
                })
                .catch((err) => res.status(500).json(err));

              const { group, email, performers, lab_name } = summaryObj[0];
              const { file1, file2, file3, file4, file5, file6 } = m13Obj[0];
              const { quantity } = req.body;
              console.log(m13Obj);
              res.locals.lab_name = lab_name;

              console.log(file1, file2, file3, file4, file5, file6);

              const dataArray = m13Obj[0]._doc;
              delete dataArray.id_lab;
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
                  (file1 === undefined ? null : file1) +
                  '\n' +
                  (file2 === undefined ? null : file2) +
                  '\n' +
                  (file3 === undefined ? null : file3) +
                  '\n' +
                  (file4 === undefined ? null : file4) +
                  '\n' +
                  (file5 === undefined ? null : file5) +
                  '\n' +
                  (file6 === undefined ? null : file6),
              ];

              console.log(newData);

              fs.writeFile(`${id_lab}_${lab_name}.txt`, `${newData}`, (err) => {
                if (err) throw err;
              });
              next();
            } catch (error) {
              console.log(error);
              res.status(500).json({ message: 'error update' });
            }
          }
        })
        .catch((error) => res.status(500).json(error));

      //next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error m13' });
    }
  }
}

module.exports = new m13_controller();
