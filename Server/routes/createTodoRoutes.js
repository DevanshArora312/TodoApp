const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const { auth } = require("../middleware/auth");

router.post("/create-todo",auth,createTodo);

module.exports = router;