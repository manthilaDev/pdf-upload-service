const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title :{
        type:String,
        required: true

    },
    report :{
        data: Buffer,
        contentType:String,
        required:false
    }
},{collection:'reports'})

module.exports = mongoose.model('report',reportSchema);