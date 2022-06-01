const express = require("express");
const router = require("express").Router();
const validator = require("validator");
const adminauth = require('../../middleware/Admin_middleware/adminauth')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const admin= require("../../models/RG_models/admin");
const staff = require('../../models/SS_models/staff');

//Admin Register to Web application
router.post('/adminsignup', async (req, res) => {
    try {
      const {
        name, 
        phone,
        sliitid,
        email,
        password,

      } = req.body

      if(!name || !phone  || !sliitid ||  !email || !password  )
      return res
      .status(400)
      .json({errorMessage : "required"});
  
      if(name.length<4)
      return res.status(400).json({
          errorMessage: "Please enter a first name of at least 3 characters.",
      });
  
  
      if(phone.length<5)
      return res.status(400).json({
          errorMessage: "Please enter a first name of at least 3 characters.",
      });

 

      //Check application has already created account using given email or SLIIT  id  
      let admin_a = await admin.findOne({ email });
      if (admin_a) {
        throw new Error("User already exists");
      }
    
      let admin2 = await admin.findOne({ sliitid });
      if (admin2) {
        throw new Error("User already exists");
      }
      admin_a = {
        name: name,
        phone:phone,
      
        sliitid : sliitid,
        email : email,
        password : password,
      }
 
//create new account and genarate token
const newadmin = new admin(admin_a)
      await newadmin.save()
      const token = await newadmin.generateAuthToken()
      res
         .status(200)
         .send({admin: newadmin, token: token, status: 'Admin Account Creation Success'})
    } catch (error) {
      res
      .status(500)
      .send({error: error.message})
       console.log(error)
    }
  });

//admin login function    
router.post('/adminsignin', async (req, res) => {
  try {
    const {sliitid, password} = req.body
    const Admin = await admin.findByCredentials(sliitid, password)
    const token = await Admin.generateAuthToken()
    res.status(200).send({token: token, Admin: Admin})

  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
});


//admin member logout the profile
router.get("/adminlogout",adminauth,async(req,res)=>{
  try{
    req.Admin.token = req.Admin.token.filter((token)=>{
      return token.token !== req.token;
    });
    await req.Admin.save();
    res.status(200).save("Logout Successfully!!!!");
  }
  catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
});

//admin member profile 
router.get("/adminprofile",adminauth,async (req, res) => {
  try {
    res.status(201)
    res.send({ status: "Admin Details fetched", Admin: req.Admin});
  } catch (error) {
    res.status(500)
    res.send({ status: "Error with Admin profile", error: error.message });
  }
});

//delete admin member account
router.delete("/admindelete",adminauth, async (req, res) => {
  try {
    const Admin = await admin.findById(req.Admin.id);
    if (!Admin) {
      throw new Error("There is no Admin Member to delete");
    }
    const deleteProfile = await admin.findByIdAndDelete(req.Admin.id);
    res.status(200).send({ status: "Member deleted", Admin : deleteProfile });
  } catch (error) {
    res
      .status(500)
      .send({ status: "error with id", error: error.message });
  }
});

//admin view roles of staff (get staff details)
router.route("/displayStaffRole").get((req,res)=>{
  staff.find().exec((err, staff) => {
    if(err){
      return res.status(400).json({
        error: err,
  });
}
  return res.status(200).json({
    success: true,
    existingDisplayStaffRole : staff
  });
});
});


//get only panel members details from the staff table
router.get("/panelmember",async(req,res)=>{
  try{
    const panelmember = await staff.find({
      role: "Panel Member"
    })
    res.status(201)
    .send({
      status : " Panel Member Retrive",
      panelmember:panelmember
     
    });
  }catch(error){
    console.log(error.message);
    res.status(500)
    .send({error:error.message});
  }
});

//update

router.put('/update', adminauth, async (req, res) => {
  try {
    const {
      name,
      phone,
      sliitid,
      email  } = req.body;

    let Admin = await admin.findOne({sliitid})
    if (!Admin) {
      throw new Error('There is no admin account')
    }

    const adminUpdate = await admin.findByIdAndUpdate(req.Admin.id, {
      name: name,
      phone: phone,
      sliitid: sliitid,
      email: email
      })

    res.status(200).send({status: 'Admin Profile Updated', Admin: adminUpdate})

  } catch (error) {
    res.status(500).send({error: error.message})
    console.log(error)
  }
});


module.exports = router;