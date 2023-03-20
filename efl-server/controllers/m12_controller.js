const fs = require('fs');
const path = require('path');

const M12model = require('../models/M12model');
const Summary = require('../models/Summary');
const { format } = require('date-fns');

class m12_controller {
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
      const { performers, group, email, id_lab, lab_name, quantity, arrayOfTable, labId, output1 } =
        req.body;
      const formData = req.files;
      //const dataArray = arrayOfTable.split(',');
      console.log(arrayOfTable, JSON.parse(arrayOfTable));
      const dataArray = JSON.parse(arrayOfTable);
      console.log(formData);

      // RENAME FILES AND WRITE DATA TO FILE
      if (formData !== null) {
        for (var oneObj in formData) {
          let newFileName;
          switch (oneObj) {
            case 'file1':
              newFileName = id_lab + '_121_code.v';
              formData[oneObj].name = id_lab + '_121_code.v';
              break;
            case 'file2':
              newFileName = id_lab + '_121_rtl.pdf';
              formData[oneObj].name = id_lab + '_121_rtl.pdf';
              break;
            case 'file3':
              newFileName = id_lab + '_121_sim.png';
              formData[oneObj].name = id_lab + '_121_sim.png';
              break;
            case 'file4':
              newFileName = id_lab + '_122_code.v';
              formData[oneObj].name = id_lab + '_122_code.v';
              break;
            case 'file5':
              newFileName = id_lab + '_122_rtl.pdf';
              formData[oneObj].name = id_lab + '_122_rtl.pdf';
              break;
            case 'file6':
              newFileName = id_lab + '_122_sim.png';
              formData[oneObj].name = id_lab + '_122_sim.png';
              break;
            case 'file1png':
              newFileName = id_lab + '_1211_pr.png';
              formData[oneObj].name = id_lab + '_1211_pr.png';
              break;
            case 'file2png':
              newFileName = id_lab + '_1212_pr.png';
              formData[oneObj].name = id_lab + '_1212_pr.png';
              break;
            case 'file3png':
              newFileName = id_lab + '_1213_pr.png';
              formData[oneObj].name = id_lab + '_1213_pr.png';
              break;
            case 'file4png':
              newFileName = id_lab + '_1214_pr.png';
              formData[oneObj].name = id_lab + '_1214_pr.png';
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
                  file1png:
                    formData === null
                      ? null
                      : formData.file1png === undefined
                      ? null
                      : formData.file1png.name,
                  file2png:
                    formData === null
                      ? null
                      : formData.file2png === undefined
                      ? null
                      : formData.file2png.name,
                  file3png:
                    formData === null
                      ? null
                      : formData.file3png === undefined
                      ? null
                      : formData.file3png.name,
                  file4png:
                    formData === null
                      ? null
                      : formData.file4png === undefined
                      ? null
                      : formData.file4png.name,
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
                    file1png:
                      formData === null
                        ? null
                        : formData.file1png === undefined
                        ? null
                        : formData.file1png.name,
                    file2png:
                      formData === null
                        ? null
                        : formData.file2png === undefined
                        ? null
                        : formData.file2png.name,
                    file3png:
                      formData === null
                        ? null
                        : formData.file3png === undefined
                        ? null
                        : formData.file3png.name,
                    file4png:
                      formData === null
                        ? null
                        : formData.file4png === undefined
                        ? null
                        : formData.file4png.name,
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
                  1: dataArray[0] === null || undefined ? null : dataArray[1],
                  2: dataArray[1] === null || undefined ? null : dataArray[2],
                  3: dataArray[2] === null || undefined ? null : dataArray[3],
                  4: dataArray[3] === null || undefined ? null : dataArray[4],
                  5: dataArray[4] === null || undefined ? null : dataArray[5],
                  6: dataArray[5] === null || undefined ? null : dataArray[6],
                  7: dataArray[6] === null || undefined ? null : dataArray[7],
                  8: dataArray[7] === null || undefined ? null : dataArray[8],
                  9: dataArray[8] === null || undefined ? null : dataArray[9],
                  10: dataArray[9] === null || undefined ? null : dataArray[10],
                  11: dataArray[10] === null || undefined ? null : dataArray[11],
                  12: dataArray[11] === null || undefined ? null : dataArray[12],
                  13: dataArray[12] === null || undefined ? null : dataArray[13],
                  14: dataArray[13] === null || undefined ? null : dataArray[14],
                  15: dataArray[14] === null || undefined ? null : dataArray[15],
                  16: dataArray[15] === null || undefined ? null : dataArray[16],
                  17: dataArray[16] === null || undefined ? null : dataArray[17],
                  18: dataArray[17] === null || undefined ? null : dataArray[18],
                  19: dataArray[18] === null || undefined ? null : dataArray[19],
                  20: dataArray[19] === null || undefined ? null : dataArray[20],
                  21: dataArray[20] === null || undefined ? null : dataArray[21],
                  22: dataArray[21] === null || undefined ? null : dataArray[22],
                  23: dataArray[22] === null || undefined ? null : dataArray[23],
                  24: dataArray[23] === null || undefined ? null : dataArray[24],
                  25: dataArray[24] === null || undefined ? null : dataArray[25],
                  26: dataArray[25] === null || undefined ? null : dataArray[26],
                  27: dataArray[26] === null || undefined ? null : dataArray[27],
                  28: dataArray[27] === null || undefined ? null : dataArray[28],
                  29: dataArray[28] === null || undefined ? null : dataArray[29],
                  30: dataArray[29] === null || undefined ? null : dataArray[30],
                  31: dataArray[30] === null || undefined ? null : dataArray[31],
                  32: dataArray[31] === null || undefined ? null : dataArray[32],
                  33: dataArray[32] === null || undefined ? null : dataArray[33],
                  34: dataArray[33] === null || undefined ? null : dataArray[34],
                  35: dataArray[34] === null || undefined ? null : dataArray[35],
                  36: dataArray[35] === null || undefined ? null : dataArray[36],
                  37: dataArray[36] === null || undefined ? null : dataArray[37],
                  38: dataArray[37] === null || undefined ? null : dataArray[38],
                  39: dataArray[38] === null || undefined ? null : dataArray[39],
                  40: dataArray[39] === null || undefined ? null : dataArray[40],
                  41: dataArray[40] === null || undefined ? null : dataArray[41],
                  42: dataArray[41] === null || undefined ? null : dataArray[42],
                  43: dataArray[42] === null || undefined ? null : dataArray[43],
                  44: dataArray[43] === null || undefined ? null : dataArray[44],
                  45: dataArray[44] === null || undefined ? null : dataArray[45],
                  46: dataArray[45] === null || undefined ? null : dataArray[46],
                  47: dataArray[46] === null || undefined ? null : dataArray[47],
                  48: dataArray[47] === null || undefined ? null : dataArray[48],
                  49: dataArray[48] === null || undefined ? null : dataArray[49],
                  50: dataArray[49] === null || undefined ? null : dataArray[50],
                  51: dataArray[50] === null || undefined ? null : dataArray[51],
                  52: dataArray[51] === null || undefined ? null : dataArray[52],
                  53: dataArray[52] === null || undefined ? null : dataArray[53],
                  54: dataArray[53] === null || undefined ? null : dataArray[54],
                  55: dataArray[54] === null || undefined ? null : dataArray[55],
                  56: dataArray[55] === null || undefined ? null : dataArray[56],
                  57: dataArray[56] === null || undefined ? null : dataArray[57],
                  58: dataArray[57] === null || undefined ? null : dataArray[58],
                  59: dataArray[58] === null || undefined ? null : dataArray[59],
                  60: dataArray[59] === null || undefined ? null : dataArray[60],
                  61: dataArray[60] === null || undefined ? null : dataArray[61],
                  62: dataArray[61] === null || undefined ? null : dataArray[62],
                  63: dataArray[62] === null || undefined ? null : dataArray[63],
                  64: dataArray[63] === null || undefined ? null : dataArray[64],
                  65: dataArray[64] === null || undefined ? null : dataArray[65],
                  66: dataArray[65] === null || undefined ? null : dataArray[66],
                  67: dataArray[66] === null || undefined ? null : dataArray[67],
                  68: dataArray[67] === null || undefined ? null : dataArray[68],
                  69: dataArray[68] === null || undefined ? null : dataArray[69],
                  70: dataArray[69] === null || undefined ? null : dataArray[70],
                  71: dataArray[70] === null || undefined ? null : dataArray[71],
                  72: dataArray[71] === null || undefined ? null : dataArray[72],
                  73: dataArray[72] === null || undefined ? null : dataArray[73],
                  74: dataArray[73] === null || undefined ? null : dataArray[74],
                  75: dataArray[74] === null || undefined ? null : dataArray[75],
                  76: dataArray[75] === null || undefined ? null : dataArray[76],
                  77: dataArray[76] === null || undefined ? null : dataArray[77],
                  78: dataArray[77] === null || undefined ? null : dataArray[78],
                  79: dataArray[78] === null || undefined ? null : dataArray[79],
                  80: dataArray[79] === null || undefined ? null : dataArray[80],
                  81: dataArray[80] === null || undefined ? null : dataArray[81],
                  82: dataArray[81] === null || undefined ? null : dataArray[82],
                  83: dataArray[82] === null || undefined ? null : dataArray[83],
                  84: dataArray[83] === null || undefined ? null : dataArray[84],
                  85: dataArray[84] === null || undefined ? null : dataArray[85],
                  86: dataArray[85] === null || undefined ? null : dataArray[86],
                  87: dataArray[86] === null || undefined ? null : dataArray[87],
                  88: dataArray[87] === null || undefined ? null : dataArray[88],
                  89: dataArray[88] === null || undefined ? null : dataArray[89],
                  90: dataArray[89] === null || undefined ? null : dataArray[90],
                  91: dataArray[90] === null || undefined ? null : dataArray[91],
                  92: dataArray[91] === null || undefined ? null : dataArray[92],
                  93: dataArray[92] === null || undefined ? null : dataArray[93],
                  94: dataArray[93] === null || undefined ? null : dataArray[94],
                  95: dataArray[94] === null || undefined ? null : dataArray[95],
                  96: dataArray[95] === null || undefined ? null : dataArray[96],
                  97: dataArray[96] === null || undefined ? null : dataArray[97],
                  98: dataArray[97] === null || undefined ? null : dataArray[98],
                  99: dataArray[98] === null || undefined ? null : dataArray[99],
                  100: dataArray[99] === null || undefined ? null : dataArray[100],
                  101: dataArray[100] === null || undefined ? null : dataArray[101],
                  102: dataArray[101] === null || undefined ? null : dataArray[102],
                  103: dataArray[102] === null || undefined ? null : dataArray[103],
                  104: dataArray[103] === null || undefined ? null : dataArray[104],
                  105: dataArray[104] === null || undefined ? null : dataArray[105],
                  106: dataArray[105] === null || undefined ? null : dataArray[106],
                  107: dataArray[106] === null || undefined ? null : dataArray[107],
                  108: dataArray[107] === null || undefined ? null : dataArray[108],
                  109: dataArray[108] === null || undefined ? null : dataArray[109],
                  110: dataArray[109] === null || undefined ? null : dataArray[110],
                  111: dataArray[110] === null || undefined ? null : dataArray[111],
                  112: dataArray[111] === null || undefined ? null : dataArray[112],
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
                  output1: output1 === undefined || null ? null : output1[0],
                  file1png:
                    formData === null
                      ? null
                      : formData.file1png === undefined
                      ? null
                      : formData.file1png.name,
                  output2: output1 === undefined || null ? null : output1[1],
                  file2png:
                    formData === null
                      ? null
                      : formData.file2png === undefined
                      ? null
                      : formData.file2png.name,
                  output3: output1 === undefined || null ? null : output1[2],
                  file3png:
                    formData === null
                      ? null
                      : formData.file3png === undefined
                      ? null
                      : formData.file3png.name,
                  output4: output1 === undefined || null ? null : output1[3],
                  file4png:
                    formData === null
                      ? null
                      : formData.file4png === undefined
                      ? null
                      : formData.file4png.name,
                });
                await m12.save();

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
              res.status(500).json({ message: 'error m12' });
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

              const m12Obj = await M12model.find({ id_lab })
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
              const { file1, file2, file3, file4, file5, file6 } = m12Obj[0];
              const { quantity } = req.body;
              console.log(m12Obj);
              res.locals.lab_name = lab_name;

              console.log(file1, file2, file3, file4, file5, file6);

              const dataArray = m12Obj[0]._doc;
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
      res.status(500).json({ message: 'error m12' });
    }
  }
}

module.exports = new m12_controller();
