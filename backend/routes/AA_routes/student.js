const express = require("express");
const router = require("express").Router();
let group = require("../../models/AA_models/student-group");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('../../middleware/auth');
const Student = require("../../models/AA_models/student");

//sign up

router.post("/signup", async (req, res) => {
  try {
    const {
      name,
      nic,
      faculty,
      student_id,
      batch,
      specialization,
      phone,
      DOB,
      email,
      pwd,
      imageUrl
    } = req.body;

  
    let student_a = await Student.findOne({ email });
  if (student_a) {
    throw new Error("User already exists");
  }

  let student_b = await Student.findOne({ student_id });
  if (student_b) {
    throw new Error("User already exists");
  }


    student_a = {
      name: name,
      nic: nic,
      faculty: faculty,
      student_id: student_id,
      batch: batch,
      specialization: specialization,
      phone: phone,
      DOB: DOB,
      email: email,
      pwd: pwd,
      imageUrl: imageUrl
    };

    const newstudent = new Student(student_a);
    await newstudent.save();
    const token = await newstudent.generateAuthToken();
    res
      .status(201)
      .send({ status: "student Created", Student: newstudent, token: token });
      console.log(student_a);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({error: error.message});
  }
});

//login

router.post('/login', async (req, res) => {
  try {
    const {student_id, pwd} = req.body
    const Std = await Student.findByCredentials(student_id, pwd)
    const token = await Std.generateAuthToken()
    res.status(200).send({token: token, Std: Std})

  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }

})

    //get student profile

    router.get("/profile", auth, async (req, res) => {
    
      try {
        res
          .status(201)
          .send({ status: "Student logged in", Std: req.Std
         });
      } catch (error) {
        res
          .status(500)
          .send({ status: "Error with /profile", error: error.message });
      }
    });

    //update

router.put('/update', auth, async (req, res) => {

  try {
    const {
      name,
      nic,
      faculty,
      student_id,
      batch,
      specialization,
      phone,
      DOB,
      email,
      pwd,
      imageUrl

    } = req.body;

    let Std = await Student.findOne({student_id})

    if (!Std) {
      throw new Error('There is no student account')
    }

    const studentUpdate = await Student.findByIdAndUpdate(req.Std.id, 
      {
      name: name,
      nic: nic,
      faculty: faculty,
      student_id: student_id,
      batch: batch,
      specialization: specialization,
      phone: phone,
      DOB: DOB,
      email: email,
      pwd: pwd,
      imageUrl: imageUrl
      })

    res.status(200).send({status: 'Student Profile Updated', Std: studentUpdate})

  } catch (error) {
    res.status(500).send({error: error.message})
    console.log(error)
  }
});

  //logout

  router.post("/logout", auth, async (req, res) => {

    try {
      req.Std.tokens = req.Std.tokens.filter((token) => {
        return token.token !== req.token;
      });
      await req.Std.save();
      res.status(200).send("Logout successfully");
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }
    
  });

  //group register

  router.post("/groupReg", async (req, res) => {
    try {
      const {
        
        group_name,

      } = req.body;

      group1 = {
    
          group_name: group_name,

      };

      let groupName = await group.findOne({ group_name });
      if (groupName) {
        throw new Error("Group name already taken");
      }
  
      const newgroup = new group(group1);
      await newgroup.save()
      res
        .status(201)
        .send({ status: "group Created", group: newgroup });
       // console.log(group1);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({error: error.message});
    }
  });



  //register members

  router.post("/groupReg/:id",auth, async (req, res) => {
    
    const groupId = req.params.id
    const student_id = req.body.groupMembers
    
    try {
      
      const group1 = await group.findById(groupId)
      const student = await Student.findById(req.Std._id);

      if (!group1) {
        throw new Error('There is no group..!!!')
      }
      
      if (!student) {
        throw new Error('There is no Student');
      }

      //check wether the student group is full or not.
      const arrLength = group1.groupMembers.length;
      // const stdt = await group.findOne(student_id);

      if(arrLength >= 4){
        throw new Error('This group already have 4 members!!!')
      }
      
    
      //check wether the student is regstered to a group or not.
      if (student.status == "Registered") {
        throw new Error("Student already registered in a group!!!");
      }

      else{
        const grp_status = "Registered";
        const gID = groupId;
        
        student.status = grp_status;
        student.grp_id = gID;

        await student.save()

      //add registering member details to student group db
      // const id1 = await Student.find({  m_student_id},{"_id":1});
      // const mem1 = await Student.findById(id1); 

      let student_groupItem = {
        sid:student._id,
        student_id: student.student_id,
        name: student.name,
        email: student.email,
        phone: student.phone,
      };
  
      await group.findOneAndUpdate(
        { _id: groupId },
        { $push: { groupMembers: student_groupItem}},
        { new: true, upsert: true }
      )
      res.status(200).send({ status: "Student Added to the Group ", student_group: student_groupItem });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ error: error.message });
    }
  });
  
  //get student groups
  router.route('/displaygroups').get((req,res) =>{
    group.find().exec((err,groups)=>{
        
        if(err){
            return res.status(400),json({
                error:err
            });
        }
        
        return res.status(200).json({
            success:true,
            existingGroups:groups
        });
    });
  });
  

  //get group members
  router.get("/display/:id", async (req, res) => {
    const groupId = req.params.id;
    try {
      const group1 = await group.findById(groupId)

      if (!group1) {
        throw new Error('There is no group..!!!')
      }
 
      res.status(200).send({ status: "Group members retrieved", groupMembers: group1.groupMembers });
    } catch (error) {
      res.status(500).send({ status: "Error with retrieve", error: error.message });
    }
  });

  


module.exports = router;