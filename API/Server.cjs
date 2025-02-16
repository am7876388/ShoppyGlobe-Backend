const express = require("express");//Importing express
const connect = require("./MongoDB.cjs");//Importing connect function
const Product = require("./ProductRoutes.cjs");//Importing Product model
const User = require("./UserRoutes.cjs");//Importing User model
const Cart = require("./CartRoutes.cjs");//Importing Cart model
const app = express();//Initializing the express
require("dotenv").config();//Importing env environment
app.use(express.json());//Using json middleware
connect();//Starting server
app.use("/api/Product",Product);
app.use("/api/User",User);
app.use("/api/Cart",Cart);
const PORT = process.env.PORT || 5000;//Selecting PORT
app.listen(PORT,() => console.log("Listening to PORT",PORT));