const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/',verify,(req,res)=>{
    // res.json({
    //     dashboard:{
    //         title:"You Entered Dashboard",
    //         description:"You successfully logined via correct token"
    //     }
    // })
    // To get user id
    res.send(req.user)
})




module.exports = router;