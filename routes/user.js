const express = require("express");
const User = require("../models/User");
const userController = require("../controllers/UserController");
const router = new express.Router();

//register user
router.post("/api/register", userController.registerUser);

//log user
router.post("/api/login", userController.logUser);

//actiavte
router.put("/api/user/activateAccount/:id", userController.activate);

module.exports = router;
