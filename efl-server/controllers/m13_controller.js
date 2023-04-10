const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const M13model = require('../models/M13Model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class m13_controller {
  async getFiles(req, res) {
    try {
      const { id, i } = req.params;

      const directoryPath = path.join(__dirname, './../Files/M13');

      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }

        const filteredFiles = files.filter((file) => file.includes(id));
        console.log(filteredFiles);

        const filePath = path.join(directoryPath, `${filteredFiles[i]}`);

        fs.readFile(filePath, function (err, data) {
          if (err) {
            return console.log('Unable to read file: ' + err);
          }
          const contentType = mime.lookup(filePath);
          res.writeHead(200, {
            'Content-Type': contentType,
          });
          res.end(data);
        });
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json('error send files m13 ', error);
    }
  }

  async getData(req, res) {
    try {
      const { id } = req.params;
      // console.log(req.params);
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
      // console.log(result);
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
        withBoard,
      } = req.body;
      const formData = req.files;
      console.log(formData);

      let currentId = 0;
      labId ? (currentId = labId) : (currentId = id_lab);

      // RENAME FILES AND WRITE DATA TO FILE
      if (formData !== null) {
        for (var oneObj in formData) {
          let newFileName;
          switch (oneObj) {
            case 'file1':
              newFileName = currentId + '_131_dc.v';
              formData[oneObj].name = currentId + '_131_dc.v';
              break;
            case 'file2':
              newFileName = currentId + '_131_rtl.pdf';
              formData[oneObj].name = currentId + '_131_rtl.pdf';
              break;
            case 'file3':
              newFileName = currentId + '_131_sim.png';
              formData[oneObj].name = currentId + '_131_sim.png';
              break;
            case 'file4':
              newFileName = currentId + '_132_cd.v';
              formData[oneObj].name = currentId + '_132_cd.v';
              break;
            case 'file5':
              newFileName = currentId + '_132_rtl.pdf';
              formData[oneObj].name = currentId + '_132_rtl.pdf';
              break;
            case 'file6':
              newFileName = currentId + '_132_sim.png';
              formData[oneObj].name = currentId + '_132_sim.png';
              break;
            case 'file7':
              newFileName = currentId + '_133_add.v';
              formData[oneObj].name = currentId + '_133_add.v';
              break;
            case 'file8':
              newFileName = currentId + '_133_sim.png';
              formData[oneObj].name = currentId + '_133_sim.png';
              break;
            case 'file9':
              newFileName = currentId + '_134_add.v';
              formData[oneObj].name = currentId + '_134_add.v';
              break;
            case 'file10':
              newFileName = currentId + '_134_sim.png';
              formData[oneObj].name = currentId + '_134_sim.png';
              break;
            case 'file11':
              newFileName = currentId + '_135_add.v';
              formData[oneObj].name = currentId + '_135_add.v';
              break;
            case 'file12':
              newFileName = currentId + '_135_rtl.pdf';
              formData[oneObj].name = currentId + '_135_rtl.pdf';
              break;
            case 'file13':
              newFileName = currentId + '_135_sim.png';
              formData[oneObj].name = currentId + '_135_sim.png';
              break;
            case 'file_1':
              newFileName = currentId + '_13_51_pr.png';
              formData[oneObj].name = currentId + '_1351_pr.png';
              break;
            case 'file_2':
              newFileName = currentId + '_13_52_pr.png';
              formData[oneObj].name = currentId + '_1352_pr.png';
              break;
            case 'file_3':
              newFileName = currentId + '_13_53_pr.png';
              formData[oneObj].name = currentId + '_1353_pr.png';
              break;
            case 'file_4':
              newFileName = currentId + '_13_54_pr.png';
              formData[oneObj].name = currentId + '_1354_pr.png';
              break;
            case 'avatar':
              newFileName = currentId + '_photo.png';
              formData[oneObj].name = currentId + '_photo.png';
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
                      ? result.file1
                      : formData.file1 === undefined
                      ? result.file1
                      : formData.file1.name,
                  file2:
                    formData === null
                      ? result.file2
                      : formData.file2 === undefined
                      ? result.file2
                      : formData.file2.name,
                  file3:
                    formData === null
                      ? result.file3
                      : formData.file3 === undefined
                      ? result.file3
                      : formData.file3.name,
                  file4:
                    formData === null
                      ? result.file4
                      : formData.file4 === undefined
                      ? result.file4
                      : formData.file4.name,
                  file5:
                    formData === null
                      ? result.file5
                      : formData.file5 === undefined
                      ? result.file5
                      : formData.file5.name,
                  file6:
                    formData === null
                      ? result.file6
                      : formData.file6 === undefined
                      ? result.file6
                      : formData.file6.name,
                  file7:
                    formData === null
                      ? result.file7
                      : formData.file7 === undefined
                      ? result.file7
                      : formData.file7.name,
                  file8:
                    formData === null
                      ? result.file8
                      : formData.file8 === undefined
                      ? result.file8
                      : formData.file8.name,
                  file9:
                    formData === null
                      ? result.file9
                      : formData.file9 === undefined
                      ? result.file9
                      : formData.file9.name,
                  file10:
                    formData === null
                      ? result.file10
                      : formData.file10 === undefined
                      ? result.file10
                      : formData.file10.name,
                  file11:
                    formData === null
                      ? result.file11
                      : formData.file11 === undefined
                      ? result.file11
                      : formData.file11.name,
                  file12:
                    formData === null
                      ? result.file12
                      : formData.file12 === undefined
                      ? result.file12
                      : formData.file12.name,
                  file13:
                    formData === null
                      ? result.file13
                      : formData.file13 === undefined
                      ? result.file13
                      : formData.file13.name,
                  file_1:
                    formData === null
                      ? result.file_1
                      : formData.file_1 === undefined
                      ? result.file_1
                      : formData.file_1.name,
                  file_2:
                    formData === null
                      ? result.file_2
                      : formData.file_2 === undefined
                      ? result.file_2
                      : formData.file_2.name,
                  file_3:
                    formData === null
                      ? result.file_3
                      : formData.file_3 === undefined
                      ? result.file_3
                      : formData.file_3.name,
                  file_4:
                    formData === null
                      ? result.file_4
                      : formData.file_4 === undefined
                      ? result.file_4
                      : formData.file_4.name,
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
                        ? result.file1
                        : formData.file1 === undefined
                        ? result.file1
                        : formData.file1.name,
                    file2:
                      formData === null
                        ? result.file2
                        : formData.file2 === undefined
                        ? result.file2
                        : formData.file2.name,
                    file3:
                      formData === null
                        ? result.file3
                        : formData.file3 === undefined
                        ? result.file3
                        : formData.file3.name,
                    file4:
                      formData === null
                        ? result.file4
                        : formData.file4 === undefined
                        ? result.file4
                        : formData.file4.name,
                    file5:
                      formData === null
                        ? result.file5
                        : formData.file5 === undefined
                        ? result.file5
                        : formData.file5.name,
                    file6:
                      formData === null
                        ? result.file6
                        : formData.file6 === undefined
                        ? result.file6
                        : formData.file6.name,
                    file7:
                      formData === null
                        ? result.file7
                        : formData.file7 === undefined
                        ? result.file7
                        : formData.file7.name,
                    file8:
                      formData === null
                        ? result.file8
                        : formData.file8 === undefined
                        ? result.file8
                        : formData.file8.name,
                    file9:
                      formData === null
                        ? result.file9
                        : formData.file9 === undefined
                        ? result.file9
                        : formData.file9.name,
                    file10:
                      formData === null
                        ? result.file10
                        : formData.file10 === undefined
                        ? result.file10
                        : formData.file10.name,
                    file11:
                      formData === null
                        ? result.file11
                        : formData.file11 === undefined
                        ? result.file11
                        : formData.file11.name,
                    file12:
                      formData === null
                        ? result.file12
                        : formData.file12 === undefined
                        ? result.file12
                        : formData.file12.name,
                    file13:
                      formData === null
                        ? result.file13
                        : formData.file13 === undefined
                        ? result.file13
                        : formData.file13.name,
                    file_1:
                      formData === null
                        ? result.file_1
                        : formData.file_1 === undefined
                        ? result.file_1
                        : formData.file_1.name,
                    file_2:
                      formData === null
                        ? result.file_2
                        : formData.file_2 === undefined
                        ? result.file_2
                        : formData.file_2.name,
                    file_3:
                      formData === null
                        ? result.file_3
                        : formData.file_3 === undefined
                        ? result.file_3
                        : formData.file_3.name,
                    file_4:
                      formData === null
                        ? result.file_4
                        : formData.file_4 === undefined
                        ? result.file_4
                        : formData.file_4.name,
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
                const m13 = new M13model({
                  id_lab,
                  withBoard,
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
                      ? null
                      : formData.file1.name,
                  file2:
                    formData === null
                      ? null
                      : formData.file2 === undefined
                      ? null
                      : formData.file2.name,
                  file3:
                    formData === null
                      ? null
                      : formData.file3 === undefined
                      ? null
                      : formData.file3.name,
                  file4:
                    formData === null
                      ? null
                      : formData.file4 === undefined
                      ? null
                      : formData.file4.name,
                  file5:
                    formData === null
                      ? null
                      : formData.file5 === undefined
                      ? null
                      : formData.file5.name,
                  file6:
                    formData === null
                      ? null
                      : formData.file6 === undefined
                      ? null
                      : formData.file6.name,
                  file7:
                    formData === null
                      ? null
                      : formData.file7 === undefined
                      ? null
                      : formData.file7.name,
                  file8:
                    formData === null
                      ? null
                      : formData.file8 === undefined
                      ? null
                      : formData.file8.name,
                  file9:
                    formData === null
                      ? null
                      : formData.file9 === undefined
                      ? null
                      : formData.file9.name,
                  file10:
                    formData === null
                      ? null
                      : formData.file10 === undefined
                      ? null
                      : formData.file10.name,
                  file11:
                    formData === null
                      ? null
                      : formData.file11 === undefined
                      ? null
                      : formData.file11.name,
                  file12:
                    formData === null
                      ? null
                      : formData.file12 === undefined
                      ? null
                      : formData.file12.name,
                  file13:
                    formData === null
                      ? null
                      : formData.file13 === undefined
                      ? null
                      : formData.file13.name,
                  file_1:
                    formData === null
                      ? null
                      : formData.file_1 === undefined
                      ? null
                      : formData.file_1.name,
                  file_2:
                    formData === null
                      ? null
                      : formData.file_2 === undefined
                      ? null
                      : formData.file_2.name,
                  file_3:
                    formData === null
                      ? null
                      : formData.file_3 === undefined
                      ? null
                      : formData.file_3.name,
                  file_4:
                    formData === null
                      ? null
                      : formData.file_4 === undefined
                      ? null
                      : formData.file_4.name,
                });
                await m13.save();

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
              const id_lab = res.locals.id_lab;

              const m13Obj = await M13model.find({ id_lab })
                .then((result) => {
                  return result;
                })
                .catch((err) => res.status(500).json(err));

              const summaryObj = await Summary.find({ id_lab })
                .then((result) => {
                  return result;
                })
                .catch((err) => res.status(500).json(err));

              const { group, email, performers, lab_name, photo } = summaryObj[0];
              const {
                file1,
                file2,
                file3,
                file4,
                file5,
                file6,
                file7,
                file8,
                file9,
                file10,
                file11,
                file12,
                file13,
                file_1,
                file_2,
                file_3,
                file_4,
                file_5,
              } = m13Obj[0];
              const {
                range1,
                hex1,
                lastRange1,
                range2,
                hex2,
                lastRange2,
                additionalArray,
                withBoard,
              } = m13Obj[0];
              const { quantity } = req.body;
              res.locals.lab_name = lab_name;

              const result1 = [];
              for (let i = 0; i < range1.length; i++) {
                result1.push(range1[i], hex1[i]);
              }
              result1.push(hex1[hex1.length - 1]);

              const result2 = [];
              for (let i = 0; i < range2.length; i++) {
                result2.push(range2[i], hex2[i]);
              }
              result2.push(hex2[hex2.length - 1]);

              const arrayResult = result1.concat(lastRange1, result2, lastRange2, additionalArray);

              let str = '';
              for (let i = 0; i < arrayResult.length; i++) {
                str += `${arrayResult[i]}` + '\n';
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
                  withBoard +
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
                  (file6 === undefined ? null : file6) +
                  '\n' +
                  (file7 === undefined ? null : file7) +
                  '\n' +
                  (file8 === undefined ? null : file8) +
                  '\n' +
                  (file9 === undefined ? null : file9) +
                  '\n' +
                  (file10 === undefined ? null : file10) +
                  '\n' +
                  (file11 === undefined ? null : file11) +
                  '\n' +
                  (file12 === undefined ? null : file12) +
                  '\n' +
                  (file13 === undefined ? null : file13) +
                  '\n' +
                  (file_1 === undefined ? null : file_1) +
                  '\n' +
                  (file_2 === undefined ? null : file_2) +
                  '\n' +
                  (file_3 === undefined ? null : file_3) +
                  '\n' +
                  (file_4 === undefined ? null : file_4) +
                  '\n' +
                  photo,
              ];

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
