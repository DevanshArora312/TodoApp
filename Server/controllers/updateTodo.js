const todo = require("../models/todos");

exports.updateTodo = async (req,res) => {
    try {
        
        const {id} = req.params;
        const {title,body,writtenBy} = req.body;
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
        const todos = await todo.findByIdAndUpdate(
            {_id : id},
            {title,writtenBy,body}            
        );
        
        res.status(200).json(
            {
                ok:true,
                success:true,
                message:"updated succesfully"
            }
        )
    }
    catch(err){
        console.log("Some error occured!");
        res.status(500).json(
            {
                ok:false,
                success:false,
                error : err.message,
                message : "Server error occured!"           
            }
        )
    }
}

exports.updateLike = async (req,res) => {
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
        const {liked} = req.body;
        const todos = await todo.findByIdAndUpdate(
            {_id : id},
            {liked}            
        );
        
        return res.status(200).json(
            {
                ok:true,
                success:true,
                message:"updated succesfully"
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