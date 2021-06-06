const authAdmin = (permissions) =>{
    return(req,res,next)=>{
        const userRole = req.body.role;
        if(permissions.includes(userRole)){
            next();
        }else{
            return res.json({
                result:"You Dont Have Permission",
                access:false
            })
        }
    }
}

module.exports = {authAdmin};