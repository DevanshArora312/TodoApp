const todo = require("../models/todos");
const {userModel} = require("../models/user");

exports.getTodo = async (req,res) => {
    // console.log(req.user);
    try {
        const id = req.user.id;
        const userAcc = await userModel.findById(id).populate("todos").exec();
        // const todos = await todo.find({});
        const todos = userAcc.todos; 
        // console.log(todos)
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
        const todos = await todo.findById(id);
        // console.log(todos)
        
        if(!todos){
            return res.status(404).json(
                {
                    success : false,
                    message : "No Todo found for given id"
                }
            )
        }
        if(todos.byUser.toString() !== req.user.id.toString()){
            return res.status(401).json(
                {
                    success : false,
                    message : "Unauthorised"
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