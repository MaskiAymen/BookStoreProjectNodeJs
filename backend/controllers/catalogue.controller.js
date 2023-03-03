const catalService=require("../services/catalogue.services")

const getBooks=async(req,res)=>{
    try{
        const books=await catalService.getAllBooks()
        res.status(200).json(books)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const getBook=async(req,res)=>{
    try{
        const book=await catalService.getBookById(req.params.id)
        res.status(200).json(book)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const deleteBook=async(req,res)=>{
    try{
        await catalService.deleteBookById(req.params.id)
        res.status(200).json("Book has been deleted successfully")
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const updateBook=async(req,res)=>{
    try{
        await catalService.updateBook(req.body)
        res.status(200).json("Book has been modified successfully")
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const addBook=async(req,res)=>{
    try{
        await catalService.createBook(req.body)
        res.status(200).json("Book has been added successfully")
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const addCategory=async(req,res)=>{
    try{
        await catalService.createCategory(req.body)
        res.status(200).json("Category has been added successfully")
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const getCategories=async(req,res)=>{
    try{
        const categories=await catalService.getAllCategories()
        res.status(200).json(categories)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const deleteCategory=async(req,res)=>{
    try{
        await catalService.deleteCategoryById(req.params.id)
        res.status(200).json("Category has been deleted successfully")
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}


module.exports={
    getBook,
    getBooks,
    deleteBook,
    updateBook,
    addBook,
    addCategory,
    getCategories,
    deleteCategory,
  
}