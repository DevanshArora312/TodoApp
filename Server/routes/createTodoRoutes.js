const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");

router.post("/create-todo",createTodo);

module.exports = router;