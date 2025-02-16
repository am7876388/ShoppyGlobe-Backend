const express = require("express");//Importing express
const router = express.Router();//Initializing router
const JWT = require("jsonwebtoken");//Importing jsonweb token
require("dotenv").config();//Importing env environment
const bcrypt = require("bcryptjs");//Importing Bcrypt
const User = require("./User.cjs");//Importing User
router.post("/register",async(req,res) =>{//Post route to register the user
const {Name,Email,Password} = req.body;
if(!Name || !Email || !Password){//Checking if Every Field is present or not
return res.status(400).json({message:"Error Bad request kindly check the fields"});
}
const num10 = await User.findOne({Email:Email});//Using await for asynchronous process
if(num10){
return res.status(409).json({message:"User already Exist"});
}
const num1 = await bcrypt.hash(Password,10);//Converting the Password to a Secret Hahsh
const num2 = new User({Name:Name,Email:Email,Password:num1});
await num2.save();//Saving the Data to the Database
res.status(201).json({message:"New User is Registered"});
})
router.post("/login",async(req,res) =>{//Post route to login the user
const {Email,Password} = req.body;
if(!Email || !Password){//Checking if Every field is present or not
return res.status(400).json({message:"Empty Field"});
}
const num1 = await User.findOne({Email:Email});
if(!num1 || !await bcrypt.compare(Password,num1.Password)){
return res.status(401).json({message:"Invalid Credentials"});
}
const num3 = JWT.sign({id:num1._id},process.env.JWTKEY);
res.status(200).json({token:num3});
})
module.exports = router;//Exporting router