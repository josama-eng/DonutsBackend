const express = require("express");
const Products = require("../models/Products");
const productsController = require("../controllers/ProductsController");
const router = new express.Router();
const verifyToken = require("../middleware/auth");

//add product
router.post("/api/products", productsController.addProducts);

//get products

router.get("/api/products/all", productsController.getProducts);

// get top products

router.get("/api/products/top", productsController.getTopProducts);

//get single product
router.get("/api/productDetails/:id", productsController.productDetails);

//stripe payment
router.post("/api/payment", verifyToken, productsController.stripePayment);

//search products
router.post("/api/products/search", productsController.searchProducts);

module.exports = router;
