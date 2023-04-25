const express = require("express");
const router = new express.Router();
const Order = require("../models/Order");
const orderController = require("../controllers/OrderController");

router.post("/api/order", orderController.createOrder);

module.exports = router;
