const userService=require("../services/user.services")

const addUser=async(req,res)=>{
    try{
        await userService.createUser(req.body)
        res.status(200).json("User has been added successfully")
    }catch(error){
        res.status(500).json(error)
    }
}

const getUsers=async(req,res)=>{
    try{
       const users= await userService.getAllUsers()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json(error)
    }
}

module.exports={addUser,getUsers}