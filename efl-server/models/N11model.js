const { Schema, model } = require('mongoose');

const schema = new Schema({
  id_lab: { type: String, required: true, unique: true },
  quantTables: { type: Number, required: true },
  data: {
    numOfCable1: { type: Number },
    photo1: { type: String },
    text11: { type: String },
    num11: { type: Number },
    text12: { type: String },
    num12: { type: Number },
    text13: { type: String },
    num13: { type: Number },
    text14: { type: String },
    num14: { type: Number },
    text15: { type: String },
    num15: { type: Number },
    text16: { type: String },
    num16: { type: Number },
    text17: { type: String },
    num17: { type: Number },
    text18: { type: String },
    num18: { type: Number },
    text19: { type: String },
    num19: { type: Number },
    text110: { type: String },
    num110: { type: Number },
    text111: { type: String },
    num111: { type: Number },
    text112: { type: String },
    num112: { type: Number },
    text113: { type: String },
    num113: { type: Number },

    numOfCable2: { type: Number },
    photo2: { type: String },
    text22: { type: String },
    num22: { type: Number },
    text23: { type: String },
    num23: { type: Number },
    text24: { type: String },
    num24: { type: Number },
    text25: { type: String },
    num25: { type: Number },
    text26: { type: String },
    num26: { type: Number },
    text27: { type: String },
    num27: { type: Number },
    text28: { type: String },
    num28: { type: Number },
    text29: { type: String },
    num29: { type: Number },
    text210: { type: String },
    num210: { type: Number },
    text211: { type: String },
    num211: { type: Number },
    text212: { type: String },
    num212: { type: Number },
    text213: { type: String },
    num213: { type: Number },

    numOfCable3: { type: Number },
    photo3: { type: String },
    num31: { type: Number },
    text32: { type: String },
    num32: { type: Number },
    text33: { type: String },
    num33: { type: Number },
    text34: { type: String },
    num34: { type: Number },
    text35: { type: String },
    num35: { type: Number },
    text36: { type: String },
    num36: { type: Number },
    text37: { type: String },
    num37: { type: Number },
    text38: { type: String },
    num38: { type: Number },
    text39: { type: String },
    num39: { type: Number },
    text310: { type: String },
    num310: { type: Number },
    text311: { type: String },
    num311: { type: Number },
    text312: { type: String },
    num312: { type: Number },
    text313: { type: String },
    num313: { type: Number },

    numOfCable4: { type: Number },
    photo4: { type: String },
    num41: { type: Number },
    text42: { type: String },
    num42: { type: Number },
    text43: { type: String },
    num43: { type: Number },
    text44: { type: String },
    num44: { type: Number },
    text45: { type: String },
    num45: { type: Number },
    text46: { type: String },
    num46: { type: Number },
    text47: { type: String },
    num47: { type: Number },
    text48: { type: String },
    num48: { type: Number },
    text49: { type: String },
    num49: { type: Number },
    text410: { type: String },
    num410: { type: Number },
    text411: { type: String },
    num411: { type: Number },
    text412: { type: String },
    num412: { type: Number },
    text413: { type: String },
    num413: { type: Number },
  },
});

module.exports = model('N11model', schema);
