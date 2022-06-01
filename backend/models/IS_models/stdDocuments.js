const mongoose = require('mongoose');
const stdDocumentsSchema = new mongoose.Schema({

    docUpload:{
        type: String,
        required:true,
    },
    studentID:{
        type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "students",
       },
    studentName: {
        type: String,
        required: true
      },
    stdId: {
       type: String,
       required: true
    },
  
});

const StdDocuments = mongoose.model("stddocuments",stdDocumentsSchema);
module.exports = StdDocuments;