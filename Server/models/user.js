const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username : {
            type:String,
            required:true,
            maxLength : 50,
        },
        email : {
            type:String,
            maxLength:50,
            required:true
        },
        password :{
            type:String,
            required:true,
        },
        regd : {
            type : Date,
            required : false,
            default : Date.now() 
        },
        todos : {
            type : [mongoose.Schema.Types.ObjectId],
            ref : "todo",
            required : false
        },
        bio :{
            type : String,
            required : false
        }
        
    }
);

const userModel = mongoose.model("user" , userSchema);

module.exports = { userModel }