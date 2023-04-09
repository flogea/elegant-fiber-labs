const { Schema, model } = require('mongoose');

const schema = new Schema({
  id_lab: { type: String, unique: true, required: true },
  withBoard: { type: Number },
  dataArray: { type: Array },
  file1: { type: String },
  file2: { type: String },
  file3: { type: String },
  file4: { type: String },
  file5: { type: String },
  file6: { type: String },
  output1: { type: String },
  file_1: { type: String },
  output2: { type: String },
  file_2: { type: String },
  output3: { type: String },
  file_3: { type: String },
  output4: { type: String },
  file_4: { type: String },
});

module.exports = model('M12model', schema);
