const express = require("express");
const GroupAssignment = require('../../models/SS_models/GroupAssignment');

const router = express.Router();

//create student groups
router.post("/assignmentgroups", (req, res) => {
  let newgroupAssignment= new GroupAssignment(req.body);
  newgroupAssignment.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Group Assignment Upload Successfully !!!",
    });
  });
});

//get pdf 
router.get("/pdfdisplay",async (req, res) => {
  const pdf = await GroupAssignment.find();
  try {
    res.json(pdf)
  } catch (error) {
    res.status(500)
    res.send({ status: "Error with PDF Fetched", error: error.message });
  }
});

module.exports = router;