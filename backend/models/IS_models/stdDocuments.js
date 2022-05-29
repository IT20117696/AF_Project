const mongoose = require('mongoose');
const stdDocumentsSchema = new mongoose.Schema({

    docUpload:{
        type: String,
        required:true,
    }
});

const StdDocuments = mongoose.model("stddocuments",stdDocumentsSchema);
module.exports = StdDocuments;