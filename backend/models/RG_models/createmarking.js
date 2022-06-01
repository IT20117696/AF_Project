const mongoose = require('mongoose');

const createmarkingSchema = new mongoose.Schema({

criteria:{
    type : String,
    required:true,
},

good:{
    type : String,
    required:true,
},

avarage:{
    type : String,
    required:true,
},
poor:{
    type : String,
    required:true,
},

comment:{
    type : String,
    required:false,
},

marks:{
    type : String,
    required:false,
},

});

module.exports = mongoose.model('Createmarking', createmarkingSchema)

