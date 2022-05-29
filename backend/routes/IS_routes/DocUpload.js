const express = require("express");
const StdDocument = require('../../models/IS_models/stdDocuments');

const router = express.Router();

//create student documents
router.post("/submitdoc", (req, res) => {
    let newstdDocument= new StdDocument(req.body);
    newstdDocument.save((err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Document Upload Successfully !!!",
      });
    });
  });

  module.exports = router;