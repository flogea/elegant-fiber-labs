const {Schema, model} = require('mongoose')

const schema = new Schema({
    fio: {type: String, required: true},
    performers: {type: String, required: true},
    group: {type: String, required: true},
    email: {type: String, required: true},
    lab_name: {type: String, required: true},
    id_lab: {type: String, required: true, unique: true},
    photo: {data: Buffer, contentType: String}
})

module.exports = model('Summary', schema)