const express = require("express");
const router = express.Router();

const { signup,login, isLoggedin } = require("../controllers/userController");

router.post("/signup",signup);
router.post("/login",login);
router.post("/isLoggedIn",isLoggedin);

module.exports = router;