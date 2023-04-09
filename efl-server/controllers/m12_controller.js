const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const M12model = require('../models/M12model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class m12_controller {
  async getFiles(req, res) {
    try {
      const { id, i } = req.params;

      const directoryPath = path.join(__dirname, './../Files/M12');

      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }

        const filteredFiles = files.filter((file) => file.includes(id));

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
      res.status(500).json('error send files m12 ', error);
    }
  }

  async getData(req, res) {
    try {
      const { id } = req.params;
      console.log(req.params);
      const m12Obj = await M12model.find({ id_lab: id })
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
      const result = summaryObj.concat(m12Obj);

      //const result = Object.assign(summaryObj, m11Obj[0]);
      console.log(result);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error.message);
      res.status(500).json('error save m12 data ', error);
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
        arrayOfTable,
        labId,
        withBoard,
        output1,
        output2,
        output3,
        output4,
      } = req.body;
      const formData = req.files;
      //const dataArray = arrayOfTable.split(',');
      const dataArray = JSON.parse(arrayOfTable);

      let currentId = 0;
      labId ? (currentId = labId) : (currentId = id_lab);

      // RENAME FILES AND WRITE DATA TO FILE
      if (formData !== null) {
        for (var oneObj in formData) {
          let newFileName;
          switch (oneObj) {
            case 'file1':
              newFileName = currentId + '_121_code.v';
              formData[oneObj].name = currentId + '_121_code.v';
              break;
            case 'file2':
              newFileName = currentId + '_121_rtl.pdf';
              formData[oneObj].name = currentId + '_121_rtl.pdf';
              break;
            case 'file3':
              newFileName = currentId + '_121_sim.png';
              formData[oneObj].name = currentId + '_121_sim.png';
              break;
            case 'file4':
              newFileName = currentId + '_122_code.v';
              formData[oneObj].name = currentId + '_122_code.v';
              break;
            case 'file5':
              newFileName = currentId + '_122_rtl.pdf';
              formData[oneObj].name = currentId + '_122_rtl.pdf';
              break;
            case 'file6':
              newFileName = currentId + '_122_sim.png';
              formData[oneObj].name = currentId + '_122_sim.png';
              break;
            case 'file_1':
              newFileName = currentId + '_12_11_pr.png';
              formData[oneObj].name = currentId + '_1211_pr.png';
              break;
            case 'file_2':
              newFileName = currentId + '_12_12_pr.png';
              formData[oneObj].name = currentId + '_1212_pr.png';
              break;
            case 'file_3':
              newFileName = currentId + '_12_13_pr.png';
              formData[oneObj].name = currentId + '_1213_pr.png';
              break;
            case 'file_4':
              newFileName = currentId + '_12_14_pr.png';
              formData[oneObj].name = currentId + '_1214_pr.png';
              break;
            case 'avatar':
              newFileName = currentId + '_photo.png';
              formData[oneObj].name = currentId + '_photo.png';
              break;
          }

          formData[oneObj].mv(path.join(__dirname, `/../Files/M12/${newFileName}`), (err) => {
            if (err) {
              console.log('error mv files', err);
              res.status(500).json({ message: 'error mv files in m12' });
            }
          });
        }
      }

      // IF LAB IS CONTINUED
      if (labId) {
        res.locals.id_lab = labId;
        M12model.findOne({ id_lab: labId })
          .then(async (result) => {
            try {
              res.locals.data = result;
              await M12model.findOneAndUpdate(
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
                    res.status(500).json({ message: 'error update m12' });
                  } else {
                    console.log(doc);
                  }
                },
              ).clone();

              console.log(res.locals.id_lab);
            } catch (error) {
              console.log(error);
              res.status(500).json({ message: 'error update m12' });
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
          M12model.findOne({ id_lab }).then(async (result) => {
            if (result) {
              // IF DOUBLE CLICKED ON SAVE BUTTON
              try {
                res.locals.data = result;
                res.locals.id_lab = id_lab;

                await M12model.findOneAndUpdate(
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
                      res.status(500).json({ message: 'error update m12' });
                    } else {
                      console.log(doc);
                    }
                  },
                ).clone();
              } catch (error) {
                console.log(error);
                res.status(500).json({ message: 'error update m12' });
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
                const m12 = new M12model({
                  id_lab,
                  withBoard,
                  dataArray: dataArray,
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
                  output1: output1 === undefined || null ? null : output1,
                  file_1:
                    formData === null
                      ? null
                      : formData.file_1 === undefined
                      ? null
                      : formData.file_1.name,
                  output2: output2 === undefined || null ? null : output2,
                  file_2:
                    formData === null
                      ? null
                      : formData.file_2 === undefined
                      ? null
                      : formData.file_2.name,
                  output3: output3 === undefined || null ? null : output3,
                  file_3:
                    formData === null
                      ? null
                      : formData.file_3 === undefined
                      ? null
                      : formData.file_3.name,
                  output4: output4 === undefined || null ? null : output4,
                  file_4:
                    formData === null
                      ? null
                      : formData.file_4 === undefined
                      ? null
                      : formData.file_4.name,
                });
                await m12.save();

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
                res.status(500).json({ message: 'error m12' });
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
      res.status(500).json({ message: 'error m12' });
    }
  }

  async addData(req, res, next) {
    try {
      const id_lab = res.locals.id_lab;
      console.log(id_lab);
      await M12model.find({ id_lab })
        .then(async (result) => {
          if (result.length === 0) {
            try {
              console.log('first');
              const { performers, group, email, lab_name, quantity, arrayOfTable, withBoard } =
                req.body;
              const formData = req.files;
              res.locals.lab_name = lab_name;
              console.log(formData);
              const dataArray = JSON.parse(arrayOfTable);

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
                  withBoard +
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
                  (formData.file6 === undefined ? null : formData.file6.name) +
                  '\n' +
                  formData ===
                null
                  ? null
                  : formData.avatar === undefined
                  ? null
                  : formData.avatar.name,
              ];

              fs.writeFile(`${id_lab}_${lab_name}.txt`, `${newData}`, (err) => {
                if (err) throw err;
              });
              next();
            } catch (error) {
              console.log(error.message);
              res.status(500).json({ message: 'error m12' });
            }
          } else {
            try {
              console.log('second');
              const id_lab = res.locals.id_lab;

              const m12Obj = await M12model.find({ id_lab })
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
                file_1,
                file_2,
                file_3,
                file_4,
                output1,
                output2,
                output3,
                output4,
                withBoard,
                dataArray,
              } = m12Obj[0];
              const { quantity } = req.body;
              res.locals.lab_name = lab_name;

              let str = '';
              for (const [key, value] of Object.entries(dataArray[0])) {
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
                  withBoard +
                  '\n' +
                  str +
                  output1 +
                  '\n' +
                  (file_1 === undefined ? null : file_1) +
                  '\n' +
                  output2 +
                  '\n' +
                  (file_2 === undefined ? null : file_2) +
                  '\n' +
                  output3 +
                  '\n' +
                  (file_3 === undefined ? null : file_3) +
                  '\n' +
                  output4 +
                  '\n' +
                  (file_4 === undefined ? null : file_4) +
                  '\n' +
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
                  photo,
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
      res.status(500).json({ message: 'error m12' });
    }
  }
}

module.exports = new m12_controller();
