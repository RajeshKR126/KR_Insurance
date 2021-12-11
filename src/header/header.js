import React from "react";
import './header.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <header>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to='/' className="nav-link-logo" >
                            <div id="logo-container">
                                <text id="ae-name-1">KR Insurance</text>
                            </div>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;