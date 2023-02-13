const { Schema, model } = require('mongoose');

const schema = new Schema({
  performers: { type: String, required: true },
  group: { type: String, required: true },
  email: { type: String, required: true },
  lab_name: { type: String, required: true },
  id_lab: { type: String, required: true, unique: true },
  photo: { type: String },
  quantity: { type: Number },
});

module.exports = model('Summary', schema);
