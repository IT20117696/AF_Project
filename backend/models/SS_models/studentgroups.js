const mongoose = require('mongoose');

const studentgroupsSchema = new mongoose.Schema({
   
    studentName :{
        type: String,
        required:true,
    },

    groupName:{
        type: String,
        required:false,
    },

    panelMember:{
        type: String,
        required:false,
    },
    topicstatus:{
        type: String,
        required:false,
    },
    supervisortopicstatus:{
        type: String,
        required:false,
    },
    cosupervisortopicstatus:{
        type: String,
        required:false,
    }
});

const Studentgroup = mongoose.model("studentgroups",studentgroupsSchema);
module.exports = Studentgroup;