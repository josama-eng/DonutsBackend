const express = require("express");
const User = require("../models/User");
const userController = require("../controllers/UserController");
const router = new express.Router();

//register user
router.post("/register", userController.registerUser);

//log user
router.post("/login", userController.logUser);

//actiavte
router.put("/user/activateAccount/:id", userController.activate);

module.exports = router;
