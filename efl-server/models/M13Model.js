const { Schema, model } = require('mongoose');

const schema = new Schema({
  id_lab: { type: String, unique: true, required: true },
  withBoard: { type: Number },
  range1: { type: Array },
  hex1: { type: Array },
  lastRange1: { type: Array },
  range2: { type: Array },
  hex2: { type: Array },
  lastRange2: { type: Array },
  additionalArray: { type: Array },
  file1: { type: String },
  file2: { type: String },
  file3: { type: String },
  file4: { type: String },
  file5: { type: String },
  file6: { type: String },
  file7: { type: String },
  file8: { type: String },
  file9: { type: String },
  file10: { type: String },
  file11: { type: String },
  file12: { type: String },
  file13: { type: String },
  file_1: { type: String },
  file_2: { type: String },
  file_3: { type: String },
  file_4: { type: String },
});

module.exports = model('M13model', schema);
