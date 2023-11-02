const commentsModel = require("../models/comments");

exports.getComments = async (req,res) => {
    // console.log("Hello");
    try {
        const comments = await commentsModel.find({});
        res.status(200).json(
            {
                ok:true,
                success:true,
                data : comments
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

exports.getCommentByID = async (req,res) => {
    try {
        const id = req.params.id;
        const comment = await commentsModel.findById({_id : id});
        
        if(!comment){
            return res.status(404).json(
                {
                    success : false,
                    message : "No comment found for given id"
                }
            )
        }
        
        res.status(200).json(
            {
                ok:true,
                success:true,
                data : comment
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