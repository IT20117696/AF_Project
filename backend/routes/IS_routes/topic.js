const express = require("express");
const stdgroups = require("../../models/IS_models/stdgroups");
const staff = require("../../models/SS_models/staff");
const router = express.Router();
 
//add reserch topic to student groups
router.post("/research/:id", async (req, res) => {
   const groupId2 = req.params.id;
   try {
     const group2 = await stdgroups.findById(groupId2);
     if (!group2) {
       throw new Error("There is no group..!!!");
     }
     const reserch_topic = req.body.researchTopic;
     const research_Field = req.body.researchField;
 
     group2.researchTopic = reserch_topic;
     group2.researchField = research_Field;
     await group2.save();
      return res.status(200).json({
       success: true,
       Studentgroups: group2,
     });
   } catch (error) {
     res.status(500).send({ status: "error", error: error.message });
   }
 });

 //delete researchtopic

 router.delete("/delete/:id", async (req, res) => {
    const groupId2 = req.params.id;
    try {
      const group2 = await stdgroups.findById(groupId2);
      if (!group2) {
        throw new Error("There is no group..!!!");
      }
      const reserch_topic = req.body.researchTopic;
      group2.researchTopic = reserch_topic;
      await group2.save();
    
      return res.status(200).json({
        success: true,
        Studentgroups: group2,
      });
    } catch (error) {
      res.status(500).send({ status: "error", error: error.message });
    }
   });

//get research topic details
router.route("/displayresearchtopic").get((req, res) => {
  stdgroups.find().exec((err, stdgroups) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingstdgroups: stdgroups,
    });
  });
 });


 //get a specific research topic
router.route("/displayresearchtopic/:id").get((req, res) => {
  let groupID = req.params.id;
  stdgroups.findById(groupID, (err,  stdgroups) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err,
  
      });
    }
    return res.status(200).json({
      success: true,
      stdgroups,
    });
  });
 });


 //add supervisor to student groups

router.post("/addSupervisor/:id", async (req, res) => {
  const groupId2 = req.params.id;
  try {
    const group2 = await stdgroups.findById(groupId2);
    if (!group2) {
      throw new Error("There is no group..!!!");
    }
     const grp_Supervisor = req.body.grpSupervisor;
     group2.grpSupervisor = grp_Supervisor;
     await group2.save();

     return res.status(200).json({
      success: true,
      Studentgroups: group2,
    });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

//add co-supervisor to student groups

router.post("/addcoSupervisor/:id", async (req, res) => {
  const groupId2 = req.params.id;
  try {
    const group2 = await stdgroups.findById(groupId2);
    if (!group2) {
      throw new Error("There is no group..!!!");
    }
    const grp_coSupervisor = req.body.grpcoSupervisor;
    group2.grpcoSupervisor = grp_coSupervisor;
    await group2.save();

      return res.status(200).json({
      success: true,
      Studentgroups: group2,
    });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

//get supervisor details

router.route("/displaysupervisors").get((req, res) => {
  stdgroups.find().exec((err, stdgroups) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingstdgroups: stdgroups,
    });
  });
 });

 //get co-supervisor details

router.route("/displaycosupervisors").get((req, res) => {
  stdgroups.find().exec((err, stdgroups) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingstdgroups: stdgroups,
    });
  });
 });


 //get supervisor from same field
 router.get("/getsupervisor/:feild" ,(req,res) => {
   let feild =req.params.feild;
   if(feild){
     staff.find({feild:feild,role:"Supervisor"}).exec((err,staff)=>{
       if(err){
         return res.status(400).json({
           error:err
         })
       }
       return res.status(200).json({
        success: true,
        staff,
     });
    });
    }else{
      return res.status(400).json({
      error:"database error"
    })}
})


 //get co-supervisor from same field
 router.get("/getcosupervisor/:feild" ,(req,res) => {
  let feild =req.params.feild;
  if(feild){
    staff.find({feild:feild,role:"Co-Supervisor"}).exec((err,staff)=>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }
      return res.status(200).json({
       success: true,
       staff,
    });
   });
   }else{
     return res.status(400).json({
     error:"database error"
   })}
})

  module.exports = router;





  

