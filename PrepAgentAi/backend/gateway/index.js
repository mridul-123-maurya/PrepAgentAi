import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import proxy from "express-http-proxy"

dotenv.config()

const app=express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(morgan("dev"))
app.use(cookieParser())

const port=process.env.PORT || 6000

app.get("/",(req,res)=>{
    res.send("welcome to gateway")
})

app.use("/api/auth",proxy(process.env.AUTH_SERVICE_URL))


app.listen(port,()=>{
    console.log(`gateway is running on ${port}`)
})