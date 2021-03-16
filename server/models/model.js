const mongoose = require('mongoose')

const Models = mongoose.Schema({
    todoItems: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('models', Models)