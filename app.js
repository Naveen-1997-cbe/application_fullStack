const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const url = 'mongodb://localhost/UsersDB'

const app = express();

//Database Connection
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('Connected to DB.....')
})

//Telling Express that iam using json to sent and receive the josn in post methods
app.use(cors());
app.use(express.json());



// const userRoute = require('./routes/Users');
const adminRoleuser = require('./routes/login');
const addEmployeeByAdmin = require('./routes/userManagement/addUsers');
// const dashboardRoute = require('./routes/dashboard');
// const employeeDetailsRoute = require('./routes/employeeDetails');

//MiddleWare
// app.use("/users",userRoute)
app.use("/adminUsers",adminRoleuser)
app.use("/addUsersAdmin",addEmployeeByAdmin)
// app.use("/dashboard",dashboardRoute)
// app.use("/employeeDetails",employeeDetailsRoute);




app.listen(8080);