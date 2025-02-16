const mongoose = require("mongoose");//Importing mongoose 
const Cart = new mongoose.Schema({//Creating new Schema for Database
UserID:{type:mongoose.Schema.ObjectId},
Products:[{ProductID:{type:mongoose.Schema.ObjectId,required:true},Price:{type:Number,required:true},Quantity:{type:Number,min:1,required:true}}]
});
module.exports = mongoose.model("Cart",Cart);//Exporting the modelled Cart