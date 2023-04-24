const express = require("express");
const Products = require("../models/Products");
const productsController = require("../controllers/ProductsController");
const router = new express.Router();
const verifyToken = require("../middleware/auth");

//add product
router.post("/products", productsController.addProducts);

//get products

router.get("/products/all", productsController.getProducts);

// get top products

router.get("/products/top", productsController.getTopProducts);

//get single product
router.get("/productDetails/:id", productsController.productDetails);

//stripe payment
router.post("/payment", verifyToken, productsController.stripePayment);

//search products
router.post("/products/search", productsController.searchProducts);

module.exports = router;
