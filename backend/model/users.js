const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    reg_no : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('users' , userSchema);
