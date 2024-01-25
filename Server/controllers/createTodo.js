const todo = require("../models/todos");
const { userModel } = require("../models/user");

exports.createTodo = async (req,res) => {
    try {
        const {title, body , writtenBy} = req.body.formData;
        const newTodo = new todo({title,body,writtenBy,byUser : req.user.id});
        const savedTodo = await newTodo.save();
        const response = await userModel.findByIdAndUpdate(req.user.id,{$push : {todos : savedTodo}},{new : true})
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