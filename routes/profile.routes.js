const express=require("express")
const { ProfileModel } = require("../model/posts.model")


const profileRouter=express.Router()

profileRouter.get("/",async(req,res)=>{
//   console.log("ans",req.body.userID)
const userID = req.body.userID

    try{
        
        const profile=await ProfileModel.find({userID})
        res.send(profile)
    }
    catch(err){
        console.log(err)
        console.log({"message":"Something went wrong"})
    }
})





module.exports={profileRouter}