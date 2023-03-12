import React from "react";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return(
        <nav className="d-flex p-2">
            <div className="col-6">
                <h1>URL Shortner</h1>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar