const {Schema, model} = require('mongoose')

const schema = new Schema({
    id: {type: String, required: true,  unique: true},
    secret: {type: String, required: true, unique: true}
})

module.exports = model('SecretKey', schema)