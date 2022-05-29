const mongoose = require('mongoose');
const studentGroupsSchema = new mongoose.Schema({
   group_name:{
       type: String,
       required:false,
   },
   researchTopic:{
       type: String,
       required:false,
   },
  researchField:{
       type: String,
       required:false,
   },
   grpSupervisor:{
    type: String,
    required:false,
   },
   grpcoSupervisor:{
    type: String,
    required:false,
}

});
const StudentGroup = mongoose.model("Studentgroups",studentGroupsSchema);
module.exports = StudentGroup;