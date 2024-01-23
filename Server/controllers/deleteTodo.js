const todo = require("../models/todos");
const commModel = require("../models/comments");

exports.deleteTodo = async (req,res) => {
    try {
        const {id} = req.params;
        const todoInstance = await todo.findById(id);
        // console.log(todoInstance)
        if(!todoInstance){
            return res.status(404).json({
                success:false,
                message:"No todo found!"
            })
        }
        
        const todos = await todo.findByIdAndDelete(id);
        const comms = await commModel.find({});
        if (comms){
            comms.map(async (el,index) => {
                if (el.todoID === id){
                    await commModel.findByIdAndDelete(el._id);
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