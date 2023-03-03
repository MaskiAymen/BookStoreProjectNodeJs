import {NavLink, Outlet } from "react-router-dom"

function ClientLayout(){
    return (
    
        <>
        
        <nav className={"navbar navbar-expand-sm navbar-light bg-light"}>
            <ul className={"navbar-nav"}>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/"}>Home</NavLink></li>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/books"}>Books</NavLink></li>
             
            </ul>
            <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </nav>
        <h2>Welcome to your BookStore</h2>
        <Outlet/>
        </>
    )
}
export default ClientLayout