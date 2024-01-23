const express = require("express");
const router = express.Router();

const {getTodo,getTodoByID} = require("../controllers/getTodo");
const {updateTodo , updateLike} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");
const { auth } = require("../middleware/auth");


router.post("/get-todo/",auth,getTodo);
router.post("/get-todo/:id",auth,getTodoByID);
router.put("/update-todo/:id",auth,updateTodo);
router.delete("/delete-todo/:id",deleteTodo);
router.put("/update-like/:id",auth,updateLike);


module.exports = router;
