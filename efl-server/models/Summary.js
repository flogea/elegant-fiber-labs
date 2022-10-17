const { Schema, model } = require('mongoose');

const schema = new Schema({
  performers: { type: String, required: true },
  group: { type: String, required: true },
  email: { type: String, required: true },
  lab_name: { type: String, required: true },
  id_lab: { type: String, required: true, unique: true },
  photo: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true },
});

module.exports = model('Summary', schema);
