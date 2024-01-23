const todo = require("../models/todos");
const commModel = require("../models/comments");

exports.deleteTodo = async (req,res) => {
    try {
        const {id} = req.params;
        const todoInstance = await todo.findById(id);
        if(!todoInstance){
            res.status(404).json({
                success:false,
                message:"No todo found!"
            })
        }
        if(todo._id !== id){
            res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }
        const todos = await todo.findByIdAndDelete( {_id : id} );
        const comms = await commModel.find({});
        if (comms){
            comms.map(async (el,index) => {
                if (el.todoID === id){
                    let deleting = await commModel.findByIdAndDelete({_id : el._id});
                }
            })
        }
        return res.status(200).json(
            {
                ok:true,
                success:true,
                message:"deleted succesfully"
            }
        )
    }
    catch(err){
        console.log("Some error occured!");
        return res.status(500).json(
            {
                ok:false,
                success:false,
                error : err.message,
                message : "Server error occured!"           
            }
        )
    }
}