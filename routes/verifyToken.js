const jwt = require('jsonwebtoken');

module.exports =  function (req,res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied!  Token needed');

    try{
        const secret_token = "dfdfsdfsefefsegsfsfgrsfssef";
        const verified = jwt.verify(token,secret_token);
        req.user = verified
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }
}