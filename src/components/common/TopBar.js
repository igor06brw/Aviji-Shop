import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

const Topbar = (props) => {

    const shopping = useSelector(state => state.shopping)
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, []);

    return (
        <nav className="navbar bg-dark">
            <a className="nav-link text-light mr-auto" href="#"> 
                <span className="mr-2">Currency: GBP</span>
                <i className="fas fa-sort-down"></i>
            </a>
            <Link to="/auth" className="nav-link text-light">Sign in or Register</Link>
            <Link to="/shopping" className="nav-link text-light bg-success" aria-disabled="true">
                <i className="fas fa-shopping-cart"></i>
                { 
                    shopping.length === 0 ? <span className="empty ml-2">Empty</span> : <span className="empty ml-2 font-bold">( {shopping.length} )</span> 
                 }
            </Link>
        </nav>
    );
}



export default Topbar;
