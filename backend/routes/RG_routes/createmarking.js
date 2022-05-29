const express = require('express');
const Createmarking = require('../../models/RG_models/createmarking');

const router = express.Router();

//create createmarking

router.route('/createmarkingadd').post((req,res)=>{

    let newCreatemarking = new Createmarking(req.body);
    newCreatemarking.save((err)=>{
       
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        
        return res.status(200).json({
            success:"Deliverys saved successfully!!"
        });
    });
});

//get createmarking

router.route('/displaycreatemarking').get((req,res) =>{
      Createmarking.find().exec((err,createmarking) =>{
          
          if(err){
              return res.status(400),json({
                  error:err
              });
          }
          
          return res.status(200).json({
              success:true,
              existingCreatemarking:createmarking
          });
      
      });
  });

  //update createmarking

router.route('/update/:createmarkingID').put((req,res)=>{
    Createmarking.findByIdAndUpdate(
        req.params.createmarkingID,{
            $set:req.body
        },
        (err,createmarking)=>{
            
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Update Successfully"
            });
        });
    });

    //Delete createmarking
router.route('/delete/:createmarkingID').delete((req,res)=>{
    Createmarking.findByIdAndRemove(req.params.createmarkingID).exec((err,deletecreatemarking)=>{
        
        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully",err
        });
       
        return res.json({
            message: "Delete Successfull",deletecreatemarking
        });
    });
 });

 //get specific data

 router.route('/:createmarkingID').get((req,res)=>{
      let createmarkingID = req.params.createmarkingID;
      Createmarking.findById(createmarkingID,(err,createmarking)=>{

        if(err) {
            return res.status(400).json({success:false, err})
       
       }
       return res.status(200).json({
       success:true,createmarking,
        });

     });
 });
 
module.exports = router;


