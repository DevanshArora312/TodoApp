const commentsModel = require("../models/comments");

exports.createComment = async (req,res) => {
    try {
        const {user, comment,todoID} = req.body;
        const response = await commentsModel.create({user, comment,todoID});
        return res.status(200).json(
            {
                ok:true,
                success : true,
                data : response
            }
        )
    }
    catch{
        console.log("Some create error occured!");
        return res.status(500).json(
            {
                ok:false,
                success:false,
                data : "Internal server error occured!"
            }
        )
    }
}