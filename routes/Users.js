const express = require('express');
const router = express.Router();
const UserRegistor = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {authAdmin} = require('../middlewares/authAdmin');

//Get Method to get all users
// router.get('/', async(req,res)=>{
//     try{
//         const allUsers = await UserRegistor.find()
//         res.json(allUsers)
//     }
//      catch(err){
//         res.send('Message ' + err);
//      }   
// })

//Get Method to get all users by passing object so this is post method
router.post('/', authAdmin(['admin']) ,async(req,res)=>{
    try{
        const secret_token = "dfdfsdfsefefsegsfsfgrsfssef";
        const verified = jwt.verify(req.body.token,secret_token);
       console.log('verified',verified._id);
        const allUsers = await UserRegistor.findOne({createdBy:verified._id})
        res.json({allUsers,access:true})
    }
     catch(err){
        res.send('Message ' + err);
     }   
})


//Get Method for get particular user by using id
router.get('/:id', async(req,res)=>{
    try{
        const user = await UserRegistor.findById(req.params.id)
        res.json(user)
    }
     catch(err){
        res.send('Message ' + err);
     }   
})

// Post Method for post new user into the database
router.post('/addUser',async(req,res)=>{
    //Saving the user inputs to database
    const emailExist = await UserRegistor.findOne({email:req.body.email})
    if(emailExist) return res.status(400).send('Email already Exist');
    try{
        const hashedPassword = await bcrypt.hash( req.body.password,10)
        const userRegistored = new UserRegistor({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            role : req.body.role,
            password : hashedPassword
        })
        const saveUsers = await userRegistored.save()
        res.json(saveUsers);
    }
    catch(err){
        res.send('Message',err);
    }
})

//Patch Method for updating the particular user informations
router.patch('/:id', async (req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash( req.body.password,10)
        const update = await UserRegistor.findById(req.params.id)
        update.firstName = req.body.firstName,
        update.lastName = req.body.lastName,
        update.email = req.body.email,
        update.role = req.body.role,
        update.password = hashedPassword
        const saveUpdatedUser = await update.save()
        res.json(saveUpdatedUser);
    }
    catch(err){
        res.send('Message',err)
    }
})




//Delete Method for deleting the users
router.delete('/:id', async (req,res)=>{
    try{
        const deleteUser = await UserRegistor.findById(req.params.id)
      
        const saveDeletedUser = await deleteUser.remove()
        res.json({"Message":"Deleted"});
    }
    catch(err){
        res.send('Message',err)
    }
})
//CRUD operation end here



//Check the Email and password with DB
router.post('/login',async(req,res)=>{
    //Saving the user inputs to database

    const user = await UserRegistor.findOne({email:req.body.email})
    if(!user) return res.json({inCorrect:'EmailIsNotFound'});

    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword) return res.json({inCorrect:'InvalidPassword'})


    //Create and assign a token
    const secret_token = "dfdfsdfsefefsegsfsfgrsfssef";
    const token = jwt.sign({_id:user.id},secret_token);
    res.header('auth-token',token).json({authtoken:token,role:user.role});

    res.send('Logged In')
    
   
})


// router.post('/login',async(req,res)=>{
//     //Saving the user inputs to database

//     const user = await UserRegistor.findOne({email:req.body.email})
//     if(!user) return res.send('EmailIsNotFound');

//     const validPassword = await bcrypt.compare(req.body.password,user.password);
//     if(!validPassword) return res.send('InvalidPassword')


//     //Create and assign a token
//     const secret_token = "dfdfsdfsefefsegsfsfgrsfssef";
//     const token = jwt.sign({_id:user.id},secret_token);
//     res.header('auth-token',token).send(token);

//     res.send('Logged In')
    
   
// })

module.exports = router