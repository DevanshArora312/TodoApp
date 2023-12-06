const todo = require("../models/todos");

exports.getTodo = async (req,res) => {
    // console.log("Hello");
    try {
        const todos = await todo.find({});
        return res.status(200).json(
            {
                ok:true,
                success:true,
                data : todos
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

exports.getTodoByID = async (req,res) => {
    try {
        const id = req.params.id;
        const todos = await todo.findById({_id : id});
        
        if(!todo){
            return res.status(404).json(
                {
                    success : false,
                    message : "No Todo found for given id"
                }
            )
        }
        
        return res.status(200).json(
            {
                ok:true,
                success:true,
                data : todos
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