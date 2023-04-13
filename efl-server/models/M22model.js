const { Schema, model } = require('mongoose');

const schema = new Schema({
  id_lab: { type: String, unique: true, required: true },
  withBoard: { type: Number },
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
  file14: { type: String },
  file15: { type: String },
  file16: { type: String },
  file17: { type: String },
  file18: { type: String },
  file_1: { type: String },
  file_2: { type: String },
  file_3: { type: String },
});

module.exports = model('M22model', schema);
