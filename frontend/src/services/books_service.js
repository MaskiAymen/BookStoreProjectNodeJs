import http from "./http-commun";

export const getAllBooks=async()=>{
    return await http.get("/books")
}

export const getBookById=async(id)=>{
    return await http.get(`/books/${id}`)
}

export const deleteBook=async(id)=>{
     return await http.delete(`/books/${id}`)
}

export const addBook=async(book)=>{
    return await http.post("/books",book)
}

export const updateBook=async(book)=>{
    return await http.put(`/books/${book.id}`,book)
}


