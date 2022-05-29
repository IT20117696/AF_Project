const mongoose = require('mongoose');

const createmarkingSchema = new mongoose.Schema({

deliverables:{
    type : String,
    required:true,
},

duedate:{
    type : String,
    required:true,
},

contribution:{
    type : String,
    required:true,
},

methodofsubmission:{
    type : String,
    required:true,
},

marksallocation:{
    type : String,
    required:true,
},

});

module.exports = mongoose.model('Createmarking', createmarkingSchema)

