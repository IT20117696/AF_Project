const mongoose = require('mongoose');
const groupAssignmentSchema = new mongoose.Schema({
    
    pdfupload:{
        type: String,
        required:true,
    },
    sliit_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "admins",
    },
    name:{
        type: String,
        required: true
    },
    adminid:{
        type: String,
        required: true
    }



});

const GroupAssignment = mongoose.model("groupassignment",groupAssignmentSchema);
module.exports = GroupAssignment;