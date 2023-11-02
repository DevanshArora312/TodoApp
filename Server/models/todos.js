const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
        title : {
            type:String,
            required:true,
            maxLength:50
        },
        writtenBy : {
            type:String,
            required:false,
            maxLength:50,
            default:"Devansh"
        },
        body: {
            type:String,
            required:true,
            maxLength:500
        },
        liked:{
            type:Boolean,
            required:false,
            default:null
        }
    }
)

module.exports = mongoose.model("todo",todoSchema);