const commentModel = require("../models/comments");

exports.deleteComment = async (req,res) => {
    try {
        const {id} = req.params;
        const comments = await commentModel.findByIdAndDelete( {_id : id} );
        
        res.status(200).json(
            {
                ok:true,
                success:true,
                message:"deleted succesfully"
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