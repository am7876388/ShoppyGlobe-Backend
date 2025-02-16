const mongoose = require("mongoose");//Importing mongoose
require("dotenv").config();//Importing env environment
const Products = require("./Product.cjs");//Importing Product Model
const Values = [//Product List in the Products
    {
      "Name": "Wireless Bluetooth Earbuds",
      "Description": "High-quality noise-canceling earbuds with long battery life.",
      "Price": 2999,
      "Rating": 4.6
    },
    {
      "Name": "Smartphone 5G",
      "Description": "Latest 5G smartphone with a 120Hz AMOLED display and 64MP camera.",
      "Price": 49999,
      "Rating": 4.8
    },
    {
      "Name": "Gaming Laptop",
      "Description": "Powerful gaming laptop with RTX 4060, 16GB RAM, and 1TB SSD.",
      "Price": 120000,
      "Rating": 4.7
    },
    {
      "Name": "Mechanical Keyboard",
      "Description": "RGB backlit mechanical keyboard with blue switches.",
      "Price": 3499,
      "Rating": 4.5
    },
    {
      "Name": "Ergonomic Office Chair",
      "Description": "Adjustable office chair with lumbar support and breathable mesh.",
      "Price": 8499,
      "Rating": 4.3
    },
    {
      "Name": "4K Smart TV",
      "Description": "55-inch Ultra HD 4K Smart TV with Dolby Vision and Android OS.",
      "Price": 45000,
      "Rating": 4.6
    },
    {
      "Name": "Wireless Gaming Mouse",
      "Description": "Lightweight gaming mouse with 16000 DPI sensor and customizable buttons.",
      "Price": 2499,
      "Rating": 4.4
    },
    {
      "Name": "Portable SSD 1TB",
      "Description": "High-speed external SSD with USB-C support for fast data transfer.",
      "Price": 7999,
      "Rating": 4.7
    },
    {
      "Name": "Smart Watch",
      "Description": "Waterproof smart watch with fitness tracking and heart rate monitor.",
      "Price": 3999,
      "Rating": 4.2
    },
    {
      "Name": "Noise-Canceling Headphones",
      "Description": "Premium over-ear headphones with active noise cancellation and deep bass.",
      "Price": 10999,
      "Rating": 4.8
    },
    {
      "Name": "Electric Toothbrush",
      "Description": "Rechargeable sonic toothbrush with multiple brushing modes.",
      "Price": 1999,
      "Rating": 4.5
    },
    {
      "Name": "Robot Vacuum Cleaner",
      "Description": "Smart robotic vacuum with self-charging and Alexa compatibility.",
      "Price": 15999,
      "Rating": 4.6
    },
    {
      "Name": "Dash Cam",
      "Description": "Full HD car dashboard camera with night vision and loop recording.",
      "Price": 4999,
      "Rating": 4.4
    },
    {
      "Name": "Home Theater System",
      "Description": "5.1 channel surround sound system with Bluetooth connectivity.",
      "Price": 29999,
      "Rating": 4.7
    },
    {
      "Name": "Electric Kettle",
      "Description": "Fast boiling stainless steel kettle with auto shut-off.",
      "Price": 1499,
      "Rating": 4.3
    },
    {
      "Name": "Smart Air Purifier",
      "Description": "HEPA air purifier with real-time air quality monitoring.",
      "Price": 9999,
      "Rating": 4.6
    },
    {
      "Name": "Wireless Charger",
      "Description": "Fast wireless charging pad for Qi-compatible devices.",
      "Price": 1299,
      "Rating": 4.2
    },
    {
      "Name": "Action Camera 4K",
      "Description": "Waterproof 4K action camera with 60fps recording.",
      "Price": 7999,
      "Rating": 4.5
    },
    {
      "Name": "Bluetooth Soundbar",
      "Description": "120W soundbar with subwoofer and HDMI ARC support.",
      "Price": 8999,
      "Rating": 4.3
    },
    {
      "Name": "Digital Drawing Tablet",
      "Description": "Pen tablet for digital artists with pressure sensitivity.",
      "Price": 5999,
      "Rating": 4.5
    },
    {
      "Name": "Wireless Mechanical Keyboard",
      "Description": "Compact 75% wireless keyboard with RGB backlighting.",
      "Price": 3999,
      "Rating": 4.4
    },
    {
      "Name": "Ultrawide Monitor",
      "Description": "34-inch ultrawide monitor with 144Hz refresh rate.",
      "Price": 35000,
      "Rating": 4.6
    },
    {
      "Name": "Multi-Port USB Hub",
      "Description": "USB-C hub with HDMI, USB 3.0, and SD card reader.",
      "Price": 2499,
      "Rating": 4.2
    },
    {
      "Name": "Smart Lock",
      "Description": "Fingerprint and passcode smart lock with remote access.",
      "Price": 8999,
      "Rating": 4.7
    },
    {
      "Name": "Cordless Vacuum Cleaner",
      "Description": "Lightweight cordless vacuum with powerful suction.",
      "Price": 12999,
      "Rating": 4.6
    },
    {
      "Name": "Wireless Security Camera",
      "Description": "1080p WiFi security camera with motion detection.",
      "Price": 4999,
      "Rating": 4.5
    },
    {
      "Name": "Gaming Desk",
      "Description": "Sturdy gaming desk with RGB lighting and cable management.",
      "Price": 7999,
      "Rating": 4.3
    },
    {
      "Name": "Portable Bluetooth Speaker",
      "Description": "Waterproof Bluetooth speaker with deep bass.",
      "Price": 3499,
      "Rating": 4.4
    },
    {
      "Name": "Digital Alarm Clock",
      "Description": "Smart alarm clock with temperature and humidity display.",
      "Price": 999,
      "Rating": 4.2
    }
  ]  
const connecting  = async() =>{
try {
await mongoose.connect(process.env.URL);
const num1 = await Products.countDocuments();
if(num1 === 0){ await Products.insertMany(Values)
  console.log("Products have been inserted kindly check it");}
else{
console.log("Products have been already inserted");
}
console.log("Successfully Connected to MongoDB");
} catch (error) {
console.log("Error ",error);
process.exit(1);
}
}
module.exports = connecting;//Exporting connecting to be used outside