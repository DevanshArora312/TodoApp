const express = require("express");
const router = express.Router();
const {auth} = require("../middleware/auth")
const { signup,login, isLoggedin, getUser } = require("../controllers/userController");

router.post("/signup",signup);
router.post("/login",login);
router.post("/isLoggedIn",auth,isLoggedin);
router.post("/get-user",auth,getUser);

module.exports = router;