import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Topbar = (props) => {

    const shopping = useSelector(state => state.shopping)
    const currentUser = useSelector(state => state.currentUser)

    

    return (
        <nav className="navbar bg-dark">
            <Link className="nav-link text-light mr-auto"> 
                <span className="mr-2">Currency: GBP</span>
                <i className="fas fa-sort-down"></i>
            </Link>
            {
                (currentUser === null) ? (
                    <>
                        <Link to="/auth" className="nav-link text-light">Sign in or Register</Link>
                        <Link to="/auth" className="nav-link text-light bg-success" aria-disabled="true">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="empty ml-2">Login</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/auth" className="nav-link text-light">Logout</Link>
                        <Link to="/shopping" className="nav-link text-light bg-success" aria-disabled="true">
                        <i className="fas fa-shopping-cart"></i>
                        {/* { 
                            shopping.length === 0 ? <span className="empty ml-2">Empty</span> : <span className="empty ml-2 font-bold">( {shopping.length} )</span> 
                        } */}
                        </Link>
                    </>
                )
            }
        </nav>
    );
}



export default Topbar;
