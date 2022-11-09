const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  discipline: { type: String, required: true },
  path: { type: String, required: true, unique: true },
  cardStyle: { type: String, required: true },
});

module.exports = model('Labs', schema);
