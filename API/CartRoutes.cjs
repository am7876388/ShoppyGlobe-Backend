const express = require("express"); // Importing express
const router = express.Router(); // Initializing Router
const Cart = require("./Cart.cjs"); // Importing Cart DataBase model
const Product = require("./Product.cjs"); // Importing Product model
const Authorization = require("./Authorization.cjs"); // Importing Authorization Middleware

router.post("/", Authorization, async (req, res) => { // Route to post data into the Cart
    try {
        const { ProductID, Quantity } = req.body; // Destructuring the Data from request body
        const num1 = req.user.id;
        let num2 = await Cart.findOne({ UserID: num1 }); // Using await for asynchronous processes
        if (!num2) {
            num2 = new Cart({ UserID: num1, Products: [] }); // Creating New Object to store
        }

        // Fetching product details
        const product = await Product.findById(ProductID);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        let num3 = num2.Products.findIndex((elem) => elem.ProductID.toString() === ProductID.toString()); // Finding out the Product needed to update
        if (num3 > -1) {
            num2.Products[num3].Quantity += Quantity; // Updating the Product
        } else {
            num2.Products.push({ ProductID: ProductID, Price: product.Price, Quantity: Quantity });
        }
        
        await num2.save();
        return res.status(201).json({ message: "Cart Updated Successfully" }); // Message regarding the Update of Cart
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
});

router.put("/:id", Authorization, async (req, res) => { // Put route to update the Item present in the Cart
    try {
        const { Quantity } = req.body;
        const num1 = req.user.id;
        let num2 = await Cart.findOne({ UserID: num1 }); // Using await for asynchronous process
        if (!num2) {
            return res.status(404).json({ message: "Not Found" });
        }

        let num3 = num2.Products.findIndex((elem) => elem.ProductID.toString() === req.params.id.toString());
        if (num3 > -1) {
            num2.Products[num3].Quantity += Quantity;
            if (num2.Products[num3].Quantity <= 0) num2.Products.splice(num3, 1);
        } else {
            // Fetching product details
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            num2.Products.push({ ProductID: req.params.id.toString(), Price: product.Price, Quantity: Quantity });
        }

        await num2.save();
        return res.status(200).json({ message: "Cart Updated Successfully" });
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
});

router.delete("/:id", Authorization, async (req, res) => { // Delete router to delete a particular Product based upon ID
    try {
        let num1 = await Cart.findOne({ UserID: req.user.id }); // Using await for asynchronous process
        if (!num1) {
            return res.status(404).json("Cart Not Found");
        }

        let num2 = num1.Products.findIndex((elem) => elem.ProductID.toString() === req.params.id.toString());
        if (num2 === -1) {
            return res.status(404).json("Product Not Found");
        } else {
            num1.Products.splice(num2, 1);
            await num1.save();
            return res.status(200).json({ message: "Product Deleted Successfully" });
        }
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
});

module.exports = router; // Exporting router
