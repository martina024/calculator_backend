const express=require("express")
const cors = require("cors");
const { connection } = require("./config/db")



const { authenticate } = require("./middelware/authenticate.middelware");
const { userRouter } = require("./routes/user.routes");
const { profileRouter } = require("./routes/profile.routes");





require("dotenv").config()

const app=express()

app.use(express.json())

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/users", userRouter )

app.use(authenticate)
app.use("/profile" , profileRouter)

app.listen((process.env.port), async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
        console.log("Not connected to DB")
        console.log(err)
    }
    console.log(`Server is running in port ${process.env.port} `)
})