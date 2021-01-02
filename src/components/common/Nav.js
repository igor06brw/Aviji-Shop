import React from 'react';
import Dropdown from './Dropdown';
import Logo from './Logo';
import { navMens, navWomens } from '../data/nav';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="container d-inline-flex align-items-center justify-content-between">
            <Link to="/" className="nav-link text-dark">
                <Logo/>
            </Link>
            <ul className="nav py-5 justify-content-end ">
                <Dropdown id="dropdownMenuLink" dataToggle="dropdown" title="Mens" data={navMens}/>
                <Dropdown id="dropdownMenuLink" dataToggle="dropdown" title="Womens" data={navWomens}/>
                <li className="nav-item">
                    <a className="nav-link text-success" href="#">Own shopping</a>
                </li>
            </ul>
            <SearchInput />
        </nav>
    );
}

export default Nav;
