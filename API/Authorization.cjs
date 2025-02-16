const JWT = require("jsonwebtoken");//Importing JSONWEBTOKEN
require("dotenv").config();//Importing the env environment
const Authorization = (req,res,next) =>{//Custom Middleware for checking whether the User is verified or not
const num1 = req.header("Authorization");
if(!num1){
return res.status(401).json({message:"Access Denied"});
}
try {
const num2 = JWT.verify(num1,process.env.JWTKEY);//Verifying the JWT with JWTKEY
req.user = num2;
next();
} catch (error) {
res.status(500).json({Error:error.message});
}
}
module.exports = Authorization;//Exporting the Function