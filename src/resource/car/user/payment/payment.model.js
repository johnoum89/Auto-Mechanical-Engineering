const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    name:{
        type: String,
    }
})

const Payment = mongoose.model('payment',paymentSchema)

module.exports = payment
