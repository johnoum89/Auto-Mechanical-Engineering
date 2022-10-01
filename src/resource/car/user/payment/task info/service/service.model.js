const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    name:{
        type: String,
    }
})

const Service = mongoose.model('service',serviceSchema)

module.exports = service
 