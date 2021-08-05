import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () =>{
    return (
        <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand ">Items App</Link>
    
        <ul className="navbar-nav ml-auto">
            <NavLink to="/" exact activeClassName={"activeLink"} className="nav-link">Home</NavLink>
            <NavLink to="/add" activeClassName={"activeLink"} className="nav-link">Add Items</NavLink>
            
        </ul>
    </nav>
    )
}

export default Navbar;