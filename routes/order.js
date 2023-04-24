const express = require("express");
const router = new express.Router();
const Order = require("../models/Order");
const orderController = require("../controllers/OrderController");

router.post("/order", orderController.createOrder);

module.exports = router;
