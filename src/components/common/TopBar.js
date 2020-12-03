import React from 'react';

const Topbar = () => {
    return (
        <nav className="navbar bg-dark">
            <a className="nav-link text-light mr-auto" href="#"> 
                <span className="mr-2">Currency: GBP</span>
                <i className="fas fa-sort-down"></i>
            </a>
            <a className="nav-link text-light" href="#">Register</a>
            <a className="nav-link text-light" href="#">Sign In</a>
            <a className="nav-link text-light bg-success" href="#" aria-disabled="true">
                <i className="fas fa-shopping-cart"></i>
                <span className="empty ml-2"> Empty</span>
            </a>
        </nav>
    );
}

export default Topbar;
