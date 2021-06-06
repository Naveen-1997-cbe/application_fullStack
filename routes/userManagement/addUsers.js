const express = require('express');
const router = express.Router();
const AddEmployee = require('../../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verify = require('../../routes/verifyToken');

// Get Method to get all users by passing object so this is post method

router.get('/', async(req,res)=>{
    try{
        const allUsers = await AddEmployee.find()
        res.json(allUsers)
    }
     catch(err){
        res.send('Message ' + err);
     }   
})


// router.get('/' ,async(req,res)=>{
//     try{
//         const getToken = req.header('auth-token'); 
//         const secret_token = "dfdfsdfsefefsegsfsfgrsfssef";
//         const verified = jwt.verify(getToken,secret_token);
//         console.log('role',verified.role);
//         let allUsers = {};
//         if(verified.role === "admin"){
//                allUsers = await AddEmployee.find();
//         }else{
//               allUsers = await AddEmployee.find({createdBy:verified._id})
//         }
        

//      return   res.json({allUsers,access:true})
//     }
//      catch(err){
//         res.send('Message ' + err);
//      }   
// })



// Post Method for post new user into the database
router.post('/',verify,async(req,res)=>{
    //Saving the user inputs to database
    const emailExist = await AddEmployee.findOne({email:req.body.email})
    if(emailExist) return res.status(400).send('Email already Exist');
    try{
        const getToken = req.header('auth-token'); 
        const secret_token = "dfdfsdfsefefsegsfsfgrsfssef";
        const verified = jwt.verify(getToken,secret_token);
         const hashedPassword = await bcrypt.hash( req.body.password,10)
         const addUser = new AddEmployee({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            role : req.body.role,
            password : hashedPassword,
            createdBy : verified._id
        })
        const saveUsers = await addUser.save()
        res.json(saveUsers);
    }
    catch(err){
        res.send('Message',err);
    }
})

module.exports = router