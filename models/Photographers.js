// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Photographers = new Schema({
    name: String,
    city: String,
    contact: String,
    about: String,
    portfolio: [{
        type: Schema.Types.ObjectId,
        ref: "Photos"
    }]
})

module.exports = mongoose.model('Photographers', Photographers)