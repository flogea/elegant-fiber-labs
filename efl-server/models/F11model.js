const {Schema, model} = require('mongoose')

const schema = new Schema({
    data: [{
        1: {type: Number},
        10: {type: Number},
        20: {type: Number},
        30: {type: Number},
        40: {type: Number},
        50: {type: Number},
        60: {type: Number},
        70: {type: Number},
        80: {type: Number},
        90: {type: Number},
        100: {type: Number},
        110: {type: Number},
        120: {type: Number},
        130: {type: Number},
        140: {type: Number},
        150: {type: Number},
        160: {type: Number},
        170: {type: Number},
        180: {type: Number},
        190: {type: Number},
        200: {type: Number},
        210: {type: Number},
        220: {type: Number},
        230: {type: Number},
        240: {type: Number},
        250: {type: Number},
        260: {type: Number},
        270: {type: Number},
        280: {type: Number},
        290: {type: Number},
        299: {type: Number}
    }]
})

module.exports = model('F11model', schema)