const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    name:{
        type: String,
    }
})

const Car = mongoose.model('car',carSchema)

module.exports = car
