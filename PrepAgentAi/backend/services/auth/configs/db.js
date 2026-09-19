import mongoose from "mongoose"

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to DB")
    } catch (error) {
        console.log("Mongodb error",error)
    }
}
export default connectDB;

