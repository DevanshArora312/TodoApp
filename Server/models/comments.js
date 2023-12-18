const mongoose = require("mongoose");

const comms = new mongoose.Schema(
    {
        user : {
            type:String,
            required:true,
            maxLength:50
        },
        comment : {
            type:String,
            required : true,
            maxLength : 350
        },
        todoID : {
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model("comment",comms);