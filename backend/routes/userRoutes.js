const express = require("express");
const authentication = require('../middleware/authMiddleware') 

const router = express.Router();

const { register, login, getMe } = require("../controllers/userController");

router.post("/register", register);

router.post("/login", login);

router.get("/me",authentication, getMe);

module.exports = router;
