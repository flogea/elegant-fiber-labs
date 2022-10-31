const { Schema, model } = require('mongoose');

const schema = new Schema({
  data: [
    {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      table1: {
        0.25: '',
        0.5: '',
        0.75: '',
        2: '',
        Зашкаливает: '',
      },
      table2: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
      },
      aopt: '',
      table3: {
        0.25: '',
        0.5: '',
        0.75: '',
        2: '',
        Зашкаливает: '',
      },
    },
  ],
});

module.exports = model('F12model', schema);
