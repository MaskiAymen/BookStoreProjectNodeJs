import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllBooks, deleteBook } from "../../services/books_service"

function Booklist(){
    const [books,setBooks]=useState([])
    useEffect(()=>{
        getBooks()
     }, [])
     async function getBooks(){
        const result=await getAllBooks()
        setBooks(result.data)
    }
    async function delBook(id){
        await deleteBook(id)
        getBooks()
    }
    return (
        <div className={"container"}>
            <Link className={"m-3 btn btn-primary"} to={"/admin/books/new"}>Create</Link>
            <table className={"table table-bordred table-hover table-striped"}>
            <thead className={"bg-light"}>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>ISBN</th>
                <th>Author</th>
                <th>Editor</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                books.map((elem,index)=>{
                    return (
                     <tr key={index}> 
                        <td>{index+1}</td>
                        <td>{elem.name}</td>
                        <td>{elem.description}</td>
                        <td>{elem.isbn}</td>
                        <td>{elem.author}</td>
                        <td>{elem.editor}</td>
                        <td>{elem.price}</td> 
                        <td><button onClick={event =>delBook(elem._id)} className={"btn btn-danger"}> Delete </button></td>
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
    )
}
export default Booklist