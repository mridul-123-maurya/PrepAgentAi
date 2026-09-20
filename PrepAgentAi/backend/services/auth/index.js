import express from "express"
import dotenv from "dotenv"
import connectDB from "./configs/db.js"
import  dns from "dns"
dns.setServers([
    '4.4.4.4',
    '8.8.8.8'
])
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js";

dotenv.config()

const app=express()

const port=process.env.PORT||6001

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("welcome to auth services")
})

app.use("/",authRouter)

app.listen(port,()=>{
    console.log(`auth is running on ${port}`)
    connectDB()
})