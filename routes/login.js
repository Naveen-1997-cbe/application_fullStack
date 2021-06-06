const express = require('express');
const router = express.Router();
const AdminRole = require('../models/admin');
const EmployeeRole = require('../models/employeeDetails');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get Method to get all users by passing object so this is post method
router.get('/allUsers', async (req, res) => {
    try {

        const allUsers = await AdminRole.find()
        res.json({ allUsers, access: true })
    }
    catch (err) {
        res.send('Message ' + err);
    }
})


//Check the Email and password with DB
router.post('/login', async (req, res) => {
    //Saving the user inputs to database

    try {
        
      const  user = await AdminRole.findOne({ email: req.body.email })
       
        if (!user) return res.json({ inCorrect: 'EmailIsNotFound' });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.json({ inCorrect: 'InvalidPassword' })
        //Create and assign a token
        const secret_token = "dfdfsdfsefefsegsfsfgrsfssef";
        const token = jwt.sign({ _id: user.id, role: user.role }, secret_token, { expiresIn: '1 days' });
        res.header('auth-token', token).json({ authtoken: token, role: user.role });

        res.send('Logged In')
    }
    catch (err) {
        res.send('Message', err)
    }

})


// Post Method for post new user into the database
router.post('/registor', async (req, res) => {
    //Saving the user inputs to database
    const emailExist = await AdminRole.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send('Email already Exist');
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const userRegistored = new AdminRole({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            role: req.body.role,
            password: hashedPassword,
            access_role:req.body.role
        })
        const saveUsers = await userRegistored.save()
        res.json(saveUsers);
    }
    catch (err) {
        res.send('Message', err);
    }
})

module.exports = router