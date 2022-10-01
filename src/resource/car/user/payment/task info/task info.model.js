const mongoose = require('mongoose')

const TaskInfoSchema = mongoose.Schema({
    name:{
        type: String,
    }
})

const TaskInfo = mongoose.model('taskInfo',taskInfoSchema)

module.exports = taskInfo
