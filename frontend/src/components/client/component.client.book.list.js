import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks } from "../../services/books_service";
function BookListClient(){
    const [books,setBooks]=useState([])
    useEffect(()=>{
        getBooks()
     }, [])
     async function getBooks(){
        const result=await getAllBooks()
        setBooks(result.data)
    }
    return (
        <>
        {books.map((elem,index)=>{
            return   (
            
            
         <div className={"container"} key={index}>
                <Link to={`/books/${elem._id}`}><img src="https://www.creativefabrica.com/wp-content/uploads/2021/12/14/Flying-Book-Illustration-Graphics-21702531-1-1-580x386.jpg" class="img-thumbnail" alt="..." width={200} height={200}></img></Link>
                <p className="m-4 ">{elem.description}</p>
                <i className="m-4">{elem.author}</i>
            </div>

        
        )
          
     
        })}
        </>
    )
}

export default BookListClient