// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Category = new Schema({
    name: String,
    photographers: [{
        type: Schema.Types.ObjectId,
        ref: "Photographers"
    }]
})


module.exports = mongoose.model('Category', Category)