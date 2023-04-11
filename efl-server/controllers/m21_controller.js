const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const M21model = require('../models/M21model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class m21_controller {
  async getFiles(req, res) {
    try {
      const { id, i } = req.params;

      const directoryPath = path.join(__dirname, './../Files/M21');

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
      res.status(500).json('error send files m21 ', error);
    }
  }

  async getData(req, res) {
    try {
      const { id } = req.params;
      const m21Obj = await M21model.find({ id_lab: id })
        .then((result) => {
          return result;
        })
        .catch((err) => res.status(500).json(err));

      const summaryObj = await Summary.find({ id_lab: id })
        .then((result) => {
          return result;
        })
        .catch((err) => res.status(500).json(err));
      const result = summaryObj.concat(m21Obj);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error.message);
      res.status(500).json('error save m21 data ', error);
    }
  }

  async saveData(req, res, next) {
    // GET DATA
    try {
      const { performers, group, email, id_lab, lab_name, quantity, labId } = req.body;
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
              newFileName = currentId + '_211_code.v';
              formData[oneObj].name = currentId + '_211_code.v';
              break;
            case 'file2':
              newFileName = currentId + '_211_rtl.pdf';
              formData[oneObj].name = currentId + '_211_rtl.pdf';
              break;
            case 'file3':
              newFileName = currentId + '_211_sim.png';
              formData[oneObj].name = currentId + '_211_sim.png';
              break;
            case 'file4':
              newFileName = currentId + '_212_code.v';
              formData[oneObj].name = currentId + '_212_code.v';
              break;
            case 'file5':
              newFileName = currentId + '_212_rtl.pdf';
              formData[oneObj].name = currentId + '_212_rtl.pdf';
              break;
            case 'file6':
              newFileName = currentId + '_212_sim.png';
              formData[oneObj].name = currentId + '_212_sim.png';
              break;
            case 'file7':
              newFileName = currentId + '_213_code.v';
              formData[oneObj].name = currentId + '_213_code.v';
              break;
            case 'file8':
              newFileName = currentId + '_213_rtl.pdf';
              formData[oneObj].name = currentId + '_213_rtl.pdf';
              break;
            case 'file9':
              newFileName = currentId + '_213_sim.png';
              formData[oneObj].name = currentId + '_213_sim.png';
              break;
            case 'file10':
              newFileName = currentId + '_214_code.v';
              formData[oneObj].name = currentId + '_214_code.v';
              break;
            case 'file11':
              newFileName = currentId + '_214_rtl.pdf';
              formData[oneObj].name = currentId + '_214_rtl.pdf';
              break;
            case 'file12':
              newFileName = currentId + '_214_sim.png';
              formData[oneObj].name = currentId + '_214_sim.png';
              break;
            case 'file13':
              newFileName = currentId + '_215_code.v';
              formData[oneObj].name = currentId + '_215_code.v';
              break;
            case 'file14':
              newFileName = currentId + '_215_rtl.pdf';
              formData[oneObj].name = currentId + '_215_rtl.pdf';
              break;
            case 'file15':
              newFileName = currentId + '_215_sim.png';
              formData[oneObj].name = currentId + '_215_sim.png';
              break;
            case 'file_1':
              newFileName = currentId + '_21_11_pr.pdf';
              formData[oneObj].name = currentId + '_21_11_pr.png';
              break;
            case 'file_2':
              newFileName = currentId + '_21_12_pr.png';
              formData[oneObj].name = currentId + '_21_12_pr.png';
              break;
            case 'avatar':
              newFileName = currentId + '_photo.png';
              formData[oneObj].name = currentId + '_photo.png';
              break;
          }

          formData[oneObj].mv(path.join(__dirname, `/../Files/M21/${newFileName}`), (err) => {
            if (err) {
              console.log('error mv files', err);
              res.status(500).json({ message: 'error mv files in m21' });
            }
          });
        }
      }

      // IF LAB IS CONTINUED
      if (labId) {
        res.locals.id_lab = labId;
        M21model.findOne({ id_lab: labId })
          .then(async (result) => {
            try {
              res.locals.data = result;
              await M21model.findOneAndUpdate(
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
                  file14:
                    formData === null
                      ? result.file14
                      : formData.file14 === undefined
                      ? result.file14
                      : formData.file14.name,
                  file15:
                    formData === null
                      ? result.file15
                      : formData.file15 === undefined
                      ? result.file15
                      : formData.file15.name,
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
                },
                {
                  new: true,
                },
                (err, doc) => {
                  if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'error update m21' });
                  } else {
                    console.log(doc);
                  }
                },
              ).clone();

              console.log(res.locals.id_lab);
            } catch (error) {
              console.log(error);
              res.status(500).json({ message: 'error update m21' });
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
          M21model.findOne({ id_lab }).then(async (result) => {
            if (result) {
              // IF DOUBLE CLICKED ON SAVE BUTTON
              try {
                res.locals.data = result;
                res.locals.id_lab = id_lab;

                await M21model.findOneAndUpdate(
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
                    file14:
                      formData === null
                        ? result.file14
                        : formData.file14 === undefined
                        ? result.file14
                        : formData.file14.name,
                    file15:
                      formData === null
                        ? result.file15
                        : formData.file15 === undefined
                        ? result.file15
                        : formData.file15.name,
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
                  },
                  {
                    new: true,
                  },
                  (err, doc) => {
                    if (err) {
                      console.log(err);
                      res.status(500).json({ message: 'error update m21' });
                    } else {
                      console.log(doc);
                    }
                  },
                ).clone();
              } catch (error) {
                console.log(error);
                res.status(500).json({ message: 'error update m21' });
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
                const m21 = new M21model({
                  id_lab,
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
                  file14:
                    formData === null
                      ? null
                      : formData.file14 === undefined
                      ? null
                      : formData.file14.name,
                  file15:
                    formData === null
                      ? null
                      : formData.file15 === undefined
                      ? null
                      : formData.file15.name,
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
                });
                await m21.save();

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
                res.status(500).json({ message: 'error m21' });
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
      res.status(500).json({ message: 'error m21' });
    }
  }

  async addData(req, res, next) {
    try {
      const id_lab = res.locals.id_lab;
      console.log(id_lab);
      await M21model.find({ id_lab })
        .then(async (result) => {
          if (result.length === 0) {
            try {
              console.log('first');
              const { performers, group, email, lab_name, quantity } = req.body;
              const formData = req.files;
              res.locals.lab_name = lab_name;
              console.log(formData);

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
              res.status(500).json({ message: 'error m21' });
            }
          } else {
            try {
              console.log('second');
              const id_lab = res.locals.id_lab;

              const m21Obj = await M21model.find({ id_lab }).exec();

              const summaryObj = await Summary.find({ id_lab }).exec();

              const { group, email, performers, lab_name } = summaryObj[0];
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
                file14,
                file15,
                file_1,
                file_2,
              } = m21Obj[0];
              const { quantity } = req.body;
              res.locals.lab_name = lab_name;

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
                  (file14 === undefined ? null : file14) +
                  '\n' +
                  (file15 === undefined ? null : file15) +
                  '\n' +
                  (file_1 === undefined ? null : file_1) +
                  '\n' +
                  (file_2 === undefined ? null : file_2),
              ];

              await new Promise((resolve, reject) => {
                fs.writeFile(`${id_lab}_${lab_name}.txt`, `${newData}`, (err) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve();
                  }
                });
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
      res.status(500).json({ message: 'error m21' });
    }
  }
}

module.exports = new m21_controller();
