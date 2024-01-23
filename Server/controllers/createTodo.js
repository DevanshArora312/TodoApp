const todo = require("../models/todos");

exports.createTodo = async (req,res) => {
    try {
        const {title, body , writtenBy} = req.body;
        const response = await todo.create({title,body,writtenBy,byUser : req.user.id});
        return res.status(200).json(
            {
                ok:true,
                success : true,
                data : response
            }
        )
    }
    catch{
        console.log("Some error occured!");
        return res.status(500).json(
            {
                ok:false,
                success:false,
                data : "Internal server error occured!"
            }
        )
    }
}