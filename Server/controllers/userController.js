const acc = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.isLoggedin = async(req,res) => {
    if(!req.user){
        return res.status(400).json({
            success:false,
            message:"user is not logged in!"
        })
    }
    return res.status(200).json({
        success:true,
        reqUserId : req.user.id,
        message:"user is logged in!"
    })
}

exports.signup = async(req,res) => {   
    try{
        const {username,email,password,regd} = req.body;
        const user = await acc.findOne({email});
        if (user){
            res.status(400).json(
                {
                    ok:false,
                    success:false,
                    data:"Email already exists!"
                }
            )
            return;
        }
        let newpassword;
        try{
            newpassword = await bcrypt.hash(password,10);
        }
        catch(err){
            console.log("Error in hashing!");
        }
        const response = await acc.create({username,email,password:newpassword,regd});
        res.status(200).json(
            {
                ok:true,
                success:true,
                data:response
            }
        )
    }
    catch(err){
        console.log(err.message);
        res.status(500).json(
            {
                ok:false,
                success:false,
                data:"Server Error"
            }
        )
    }
}

exports.login = async(req,res) => {   
    try{
        const {email,password} = req.body;
        let user = await acc.findOne({email});
        if (!user){
            res.status(401).json(
                {
                    ok:false,
                    success:false,
                    data:"Account with given email not found!"
                }
            )
            return;
        }

        const payLoad = {
            email : user.email,
            id : user._id,
            role : user.role
        }

        if (await bcrypt.compare(password,user.password)){
            
            let token = jwt.sign(payLoad,process.env.JWT_SECRET_KEY,{ expiresIn: "48h" });
            res.status(200).json(
                {
                    ok:true,
                    success:true,
                    token,
                    message:"Login Successful!"
                }
            )
        }
        else{
            res.status(403).json({
                success:false,
                message:"password does not match!"
            })
        }
        
    }
    catch(err){
        console.log(err.message);
        res.status(500).json(
            {
                ok:false,
                success:false,
                data:"Server Error"
            }
        )
    }
}