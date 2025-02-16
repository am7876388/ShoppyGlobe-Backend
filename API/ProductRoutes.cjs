const express = require("express");//Importing express
const Product = require("./Product.cjs");//Importing Product
const { default: mongoose } = require("mongoose");//Importing mongoose
const router = express.Router();//Creating Router
router.get("/",async(_,res) =>{//Get route for getting product
try {
const num1 = await Product.find();//Using await for asynchronous process
res.status(200).json(num1);
} catch (error) {
res.status(500).json({Error:error.message});
}
});
router.get("/:id",async(req,res) =>{//Get route for getting a specific product
try {
if(!mongoose.Types.ObjectId.isValid(req.params.id)){//Validating the id given by the user
return res.status(400).json({message:"The ID is not Valid"});
}
const num1 = await Product.findById(req.params.id);
if(!num1){
return res.status(404).json({Message:"Not Found"});
}
else{
return res.status(200).json(num1);
}
} catch (error) {
res.status(500).json({Error:error.message});
}
});
module.exports = router;//Exporting the Router