const mongoose=require("mongoose")
const categorySchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String}
})

const Category=mongoose.model("Catergory",categorySchema)
module.exports=Category
