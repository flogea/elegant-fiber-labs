const { Schema, model } = require('mongoose');

const schema = new Schema({
  id_lab: { type: String, required: true, unique: true },
  data: { type: Array },
  file1: { type: String },
  file2: { type: String },
  file3: { type: String },
  file4: { type: String },
  file5: { type: String },
  file6: { type: String },
});

module.exports = model('M11model', schema);
