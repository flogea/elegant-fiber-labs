const { Schema, model } = require('mongoose');

const schema = new Schema({
  data: [
    {
      0: { type: Number },
      5: { type: Number },
      10: { type: Number },
      15: { type: Number },
      20: { type: Number },
      25: { type: Number },
      30: { type: Number },
      35: { type: Number },
      40: { type: Number },
      45: { type: Number },
      50: { type: Number },
      55: { type: Number },
      60: { type: Number },
      65: { type: Number },
      70: { type: Number },
      75: { type: Number },
      80: { type: Number },
      85: { type: Number },
      90: { type: Number },
      95: { type: Number },
      100: { type: Number },
      105: { type: Number },
      110: { type: Number },
      115: { type: Number },
      120: { type: Number },
      125: { type: Number },
      130: { type: Number },
      135: { type: Number },
      140: { type: Number },
      145: { type: Number },
      150: { type: Number },
      155: { type: Number },
      160: { type: Number },
      165: { type: Number },
      170: { type: Number },
      175: { type: Number },
      180: { type: Number },
    },
  ],
});

module.exports = model('F13model', schema);
