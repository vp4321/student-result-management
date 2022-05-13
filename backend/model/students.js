const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    reg_no : {
        type : Number,
        required : true
    },
    sessionmarks :[ 
        {
            session : Number,
            subjectmarks : [{
                subject : String,
                marks : Number
            }]
        }
    ]
})

module.exports = mongoose.model('students' , studentSchema);
