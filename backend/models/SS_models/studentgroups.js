const mongoose = require('mongoose');

const studentgroupsSchema = new mongoose.Schema({

    group_name:{
        type: String,
        required:true,
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