import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = (props) => {

    const handleEvent = (event) => {

    }

    return (
        <nav className="navbar bg-dark">
            <a className="nav-link text-light mr-auto" href="#"> 
                <span className="mr-2">Currency: GBP</span>
                <i className="fas fa-sort-down"></i>
            </a>
            <Link to="/auth" className="nav-link text-light">Sign in or Register</Link>
            <Link to="/shopping" className="nav-link text-light bg-success" aria-disabled="true">
                <i className="fas fa-shopping-cart"></i>
                <span className="empty ml-2">Empty</span>
            </Link>
        </nav>
    );
}

export default Topbar;
