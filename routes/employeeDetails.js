const express = require('express');
const router = express.Router();
const EmployeeDetails = require('../models/employeeDetails');




//Get All Employee Details 
router.get('/', async(req,res)=>{
    try{
        const allEmployeeDetails = await EmployeeDetails.find()
        res.json(allEmployeeDetails)
    }
     catch(err){
        res.send('Message ' + err);
     }   
})


//Post All Employee Details
router.post('/',async(req,res)=>{
try{
    let employe = await EmployeeDetails({
        phone:req.body.phone,
        address:req.body.address,
        state:req.body.state,
        country:req.body.country,
        pincode:req.body.pincode
    })
    const saveEmployeeDetails = await employe.save()
    res.json(saveEmployeeDetails);
}catch(err){
    res.send('Message',err);
}
})

module.exports = router