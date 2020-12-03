import React from 'react';
import Dropdown from './Dropdown';
import Logo from './Logo';

const Nav = () => {
    return (
        <div className="container d-inline-flex align-items-center justify-content-between">
            <Logo />
            <ul className="nav py-5 justify-content-end ">
                <Dropdown id="dropdownMenuLink" dataToggle="dropdown" title="Mens"/>
                <Dropdown id="dropdownMenuLink" dataToggle="dropdown" title="Womens"/>
                <li className="nav-item">
                    <a className="nav-link text-success" href="#">Own shopping</a>
                </li>
            </ul>

        </div>
    );
}

export default Nav;
