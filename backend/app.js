const express=require("express")
const cors=require("cors")
const app=express()
const mongoose=require("mongoose")
const catRoutes=require("./routes/category.routes")

const bookRoutes=require("./routes/book.routes")
const userRoutes=require("./routes/user.routes")

app.use(cors())
app.use(express.json())
app.use("/categories",catRoutes)

app.use("/books",bookRoutes)
app.use("/users",userRoutes)

require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
.then(result=>
    app.listen(process.env.PORT,function(){
        console.log("server is running succesfully")
    })
    )
.catch(error=>console.log("Error Database"))

