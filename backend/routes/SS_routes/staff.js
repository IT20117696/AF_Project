const express = require("express");
const router = require("express").Router();
let staff = require("../../models/SS_models/staff");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const staffauth = require("../../middleware/staff_middleware/staffauth")
const auth = require('../../middleware/staff_middleware/staffauth');

//staff signup
router.post("/staffsignup", async (req, res) => {
    try {
      const {
        name,
        phone,
        faculty,
        feild,
        staff_id,
        role,
        email,
        pwd
      } = req.body;

  let staff_a = await staff.findOne({ email });
      if (staff_a) {
        throw new Error("User already exists");
      }
    
      let staff2 = await staff.findOne({ staff_id });
      if (staff2) {
        throw new Error("User already exists");
      }

      staff_a = {
        name: name,
        phone: phone,
        faculty: faculty,
        feild:feild,
        staff_id: staff_id,
        role:role,
        email: email,
        pwd: pwd
      };

 const newstaff = new staff(staff_a);
      await newstaff.save();
      const token = await newstaff.generateAuthToken();
      res
        .status(201)
        .send({ status: "Staff Member Created", staff: newstaff, token: token });
        console.log(staff_a);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({error: error.message});
    }
  });

//staff login 
router.post('/stafflogin', async (req, res) => {
  try {
    const {staff_id, pwd} = req.body
    const Staff = await staff.findByCredentials(staff_id, pwd)
    const token = await Staff.generateAuthToken()
    res.status(200).send({token: token, Staff: Staff})

  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
});

//staff member logout
router.get("/stafflogout",auth,async(req,res)=>{
  try{
    req.Staff.tokens = req.Staff.tokens.filter((token)=>{
      return token.token !== req.token;
    });
    await req.Staff.save();
    res.status(200).save("Logout Successfully!!!!");

  }catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
});

//staff profile
router.get("/staffprofile", auth, async (req, res) => {
  try {
    res.status(201)
    res.send({ status: "Staff fetched", Staff: req.Staff});
  } catch (error) {
    res.status(500)
    res.send({ status: "Error with /staffprofile", error: error.message });
  }
});

module.exports = router;