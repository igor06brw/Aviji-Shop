import React from 'react';
import Navbar from './Navbar';
import "../styles/Header.css"

const Header = (props) => {
    return (
        <header>
            <Navbar />
            <div className="image-of-background">
                <h1 className="font-weight-bold text-light header-title">Aviji Shop</h1>
                <p className="font-weight-light text-light header-description">{props.description}</p>
            </div>
        </header>
    );
}

export default Header;
