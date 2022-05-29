const express = require("express");
const Studentgroups = require("../../models/SS_models/studentgroups");

const router = express.Router();


//get student group details
router.route("/displaystudentgroups").get((req, res) => {
  Studentgroups.find().exec((err, studentgroups) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingStudentgroups: studentgroups,
    });
  });
});
   

//get a specific student groups
router.route("/displaystudentgroups/:id").get((req, res) => {
  let groupID = req.params.id;
  Studentgroups.findById(groupID, (err, studentgroups) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err,

      });
    }
    return res.status(200).json({
      success: true,
      studentgroups,
    });
  });
});

//add panel members to student groups
router.post("/studentgroups/:id", async (req, res) => {
  const groupId = req.params.id;
  try {
    const group1 = await Studentgroups.findById(groupId);
    if (!group1) {
      throw new Error("There is no group..!!!");
    }
    const panel_Member = req.body.panelMember;
    group1.panelMember = panel_Member;
    await group1.save();

    return res.status(200).json({
      success: true,
      studentgroups: group1,
    });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

//Delete panel member
router.delete("/delete/:id", async (req, res) => {
  const groupId = req.params.id;
  try {
    const group1 = await Studentgroups.findById(groupId);
    if (!group1) {
      throw new Error("There is no group..!!!");
    }
    const panel_Member = req.body.panelMember;
    group1.panelMember = panel_Member;
    await group1.save();

    return res.status(200).json({
      success: true,
      studentgroups: group1,
    });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

//Accepet and reject
router.post("/accepttopic/:id/:msg", async (req, res) => {
  const groupId = req.params.id
  const msg = req.params.msg
  try{await Studentgroups.findOneAndUpdate(
      {_id:groupId},
      {topicstatus:msg}
      )
        if(msg==="Accepted"){
          res.status(200).send({status:"topic accept succesful"})
        }
        else if (msg==="Rejected"){
          res.status(200).send({status:"topic rejected succesful"})
        }
         
  }catch (error) {
              res.status(500).send({error: error.message})
              console.log(error)
            }

});


//Accepet and reject
router.post("/accepttopic/:id/:msg", async (req, res) => {
  const groupId = req.params.id
  const msg = req.params.msg
  try{await Studentgroups.findOneAndUpdate(
      {_id:groupId},
      {topicstatus:msg}
      )
        if(msg==="Accepted"){
          res.status(200).send({status:"topic accept succesful"})
        }
        else if (msg==="Rejected"){
          res.status(200).send({status:"topic rejected succesful"})
        }
         
  }catch (error) {
              res.status(500).send({error: error.message})
              console.log(error)
            }

});

//supervisor accept
router.post("/requestsupervisor/:id/:msg", async (req, res) => {
  const groupId = req.params.id
  const msg = req.params.msg
  try{await Studentgroups.findOneAndUpdate(
      {_id:groupId},
      {supervisortopicstatus:msg}
      )
        if(msg==="Accepted"){
          res.status(200).send({status:"Supervisor accept succesful"})
        }
        else if (msg==="Rejected"){
          res.status(200).send({status:"Supervisor rejected succesful"})
        }
         
  }catch (error) {
              res.status(500).send({error: error.message})
              console.log(error)
            }

});


//co-supervisor accept
router.post("/requestcosupervisor/:id/:msg", async (req, res) => {
  const groupId = req.params.id
  const msg = req.params.msg
  try{await Studentgroups.findOneAndUpdate(
      {_id:groupId},
      {cosupervisortopicstatus:msg}
      )
        if(msg==="Accepted"){
          res.status(200).send({status:"Co-Supervisor accept succesful"})
        }
        else if (msg==="Rejected"){
          res.status(200).send({status:"Co-Supervisor rejected succesful"})
        }
         
  }catch (error) {
              res.status(500).send({error: error.message})
              console.log(error)
            }

});




module.exports = router;
