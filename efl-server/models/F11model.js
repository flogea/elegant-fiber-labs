const { Schema, model } = require('mongoose');

const schema = new Schema({
  id_lab: { type: String, required: true, unique: true },
  table1: { type: Array },
  table2: { type: Array },
  table3: { type: Array },
  table4: { type: Array },
});

module.exports = model('F11model', schema);
