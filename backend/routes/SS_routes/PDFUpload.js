const express = require("express");
const GroupAssignment = require('../../models/SS_models/GroupAssignment');
const Admin = require('../../models/RG_models/admin');
const auth = require ('../../middleware/admin_middleware/adminauth');
const router = express.Router();

//upload document
router.post("/assignmentgroups", auth, async (req, res) => {
  try{
    let sliit_id = req.Admin._id
    const admin = await Admin.findById(sliit_id)
    if (!admin) {
      throw new Error('There is no Admin');
   }

   const {pdfupload} = req.body;

   const pdf = {
       pdfupload: pdfupload,
       sliit_id: sliit_id,
       name: req.Admin.name,
       adminid: req.Admin.sliitid
   };


   let newgroupAssignment= new GroupAssignment(pdf);
   await newgroupAssignment.save();
     res.status(200).send({ status: "Document Upload Successfully !!!", GroupAssignment: newgroupAssignment });
   } catch (error) {
     console.log(error.message);
     res.status(500).send({ error: error.message });
   }
 });



// //get pdf 
// router.get("/pdfdisplay",async (req, res) => {
//   const pdf = await GroupAssignment.find();
//   try {
//     res.json(pdf)
//   } catch (error) {
//     res.status(500)
//     res.send({ status: "Error with PDF Fetched", error: error.message });
//   }
// });

module.exports = router;