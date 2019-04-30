// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Photo = new Schema({
    url: String,
    caption: String
})

module.exports = mongoose.model('Photos', Photo)