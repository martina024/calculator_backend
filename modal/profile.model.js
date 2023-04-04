const mongoose=require("mongoose")

const profileSchema=mongoose.Schema({
    "name":String,
    "userID":String
},
{
    versionKey:false
}
)

const ProfileModel=mongoose.model("profile",profileSchema)

module.exports={ProfileModel}
