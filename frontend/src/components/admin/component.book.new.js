import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addBook } from "../../services/books_service"

function BookNew(){
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [isbn,setISBN]=useState("")
    const [author,setAuthor]=useState("")
    const [editor,setEditor]=useState("")
    const [price,setPrice]=useState("")
    const navigate= useNavigate()
    async function handleForm(event){
        event.preventDefault()
        const book={"name":name,"description":description,"isbn":isbn,"author":author,"editor":editor,"price":price}
        addBook(book)
        navigate("/admin/books")
    }
    return(
        <div className={"container mt-5"}>
            <form onSubmit={event => handleForm(event)}>
            <label className={"form-label"} htmlFor={"name"}>Name: </label>
            <input className={"form-control"} onChange={e => setName(e.target.value)} type="text" id={"name"}/>
            <label className={"form-label"} htmlFor={"description"}>Description: </label>
            <input className={"form-control"} onChange={e => setDescription(e.target.value)} type="text" id={"description"}/>
            <label className={"form-label"} htmlFor={"isbn"}>ISBN: </label>
            <input className={"form-control"} onChange={e => setISBN(e.target.value)} type="text" id={"isbn"}/>
            <label className={"form-label"} htmlFor={"author"}>Author: </label>
            <input className={"form-control"} onChange={e => setAuthor(e.target.value)} type="text" id={"author"}/>
            <label className={"form-label"} htmlFor={"editor"}>Editor: </label>
            <input className={"form-control"} onChange={e => setEditor(e.target.value)} type="text" id={"editor"}/>
            <label className={"form-label"} htmlFor={"price"}>Price: </label>
            <input className={"form-control"} onChange={e => setPrice(e.target.value)} type="text" id={"price"}/>
            <input className={"m-2 btn btn-primary"} type="submit" value={"Save"} />
            <input className={"m-2 btn btn-secondary"} type="reset" value={"Clear"} />
        </form>
        </div>
    )
}

export default BookNew