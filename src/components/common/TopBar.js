import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <nav className="navbar bg-dark">
            <a className="nav-link text-light mr-auto" href="#"> 
                <span className="mr-2">Currency: GBP</span>
                <i className="fas fa-sort-down"></i>
            </a>
            <Link to="/register" className="nav-link text-light" >Register</Link>
            <Link to="/login" className="nav-link text-light">Sign In</Link>
            <Link to="/shopping" className="nav-link text-light bg-success" aria-disabled="true">
                <i className="fas fa-shopping-cart"></i>
                <span className="empty ml-2"> Empty</span>
            </Link>
        </nav>
    );
}

export default Topbar;
