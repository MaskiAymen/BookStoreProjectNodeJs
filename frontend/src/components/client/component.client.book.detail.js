import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getBookById } from "../../services/books_service"

function BookDetail(){
    const [book,setBook]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        getBook()
    }, [])
   async function getBook(){
        const result=await getBookById(id)
        setBook(result.data)

    }
    return (
    
    
    
    <div className={"container"}>
        <div>
                <img src="https://www.creativefabrica.com/wp-content/uploads/2021/12/14/Flying-Book-Illustration-Graphics-21702531-1-1-580x386.jpg" class="img-thumbnail" alt="..." width={300} height={300}></img>
                <p>{book.description}</p>
                <i>{book.author}</i>
            </div>
    </div>
    )
}

export default BookDetail 