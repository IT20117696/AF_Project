const mongoose = require('mongoose');

const groupAssignmentSchema = new mongoose.Schema({
    
     pdfupload:{
        type: String,
        required:true,
    }


});

const GroupAssignment = mongoose.model("groupassignment",groupAssignmentSchema);
module.exports = GroupAssignment;