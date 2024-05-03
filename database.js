import mongoose from "mongoose";

function studentdata(){
    mongoose.connect("mongodb+srv://nagalakshmib48:2FsfQfXWpWlSLLes@cluster0.s3n4ayr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}

mongoose.connection.on("connected",()=>{
    console.log("db connected")
})
mongoose.connection.on("error",(err)=>{
    console.log("db is not connected"+err)
})

export default studentdata;