const  express = require("express");
const router = express.Router();
const {getComments} = require("../controllers/getComments");
const {createComment} = require("../controllers/createComment");
const {deleteComment} = require("../controllers/deleteComment");


router.post("/comments/create",createComment);
router.get("/comments/get",getComments);
router.delete("/comments/delete/:id",deleteComment);

module.exports = router;