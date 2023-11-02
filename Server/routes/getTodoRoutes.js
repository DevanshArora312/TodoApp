const express = require("express");
const router = express.Router();

const {getTodo,getTodoByID} = require("../controllers/getTodo");
const {updateTodo , updateLike} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");


router.get("/get-todo/",getTodo);
router.get("/get-todo/:id",getTodoByID);
router.put("/update-todo/:id",updateTodo);
router.delete("/delete-todo/:id",deleteTodo);
router.put("/update-like/:id",updateLike);


module.exports = router;
