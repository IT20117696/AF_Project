// const express = require ('express');
// const Evaluate = require('../../models/RG_models/evaluate');
// const Createmarking = require('../../models/RG_models/createmarking');
// const router = express.Router();

// //get evaluates
// router.route('/displayevaluate').get((req,res) =>{
//     Createmarking.find().exec((err,createmarking)=>{
//         if(err){
//             return res.status(400),json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             existingEvaluate:createmarking
//         });
//     });
// });

// module.exports = router;