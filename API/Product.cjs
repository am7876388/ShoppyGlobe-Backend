const mongoose = require("mongoose");//Importing mongoose
const Product = new mongoose.Schema({//Defining new Product Schema
Name:{type:String,required:true},
Description:{type:String,required:true},
Price:{type:Number,required:true},
Rating:{type:Number,required:true,min:0,max:5}
},{timestamps:true});
module.exports = mongoose.model("Products",Product);//Exporting the module