const mongoose = require("mongoose");//Importing mongoose 
const User = new mongoose.Schema({//Creating new User Schema
Name:{type:String,required:true},
Email:{type:String,required:true,unique:true},
Password:{type:String,required:true}
})
module.exports = mongoose.model("User",User)//Exporting model