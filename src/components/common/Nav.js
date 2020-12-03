import React from 'react';
import Dropdown from './Dropdown';
import Logo from './Logo';
import { navMens, navWomens } from '../data/nav';
import SearchInput from './SearchInput';

const Nav = () => {
    return (
        <div className="container d-inline-flex align-items-center justify-content-between">
            <Logo/>
            <ul className="nav py-5 justify-content-end ">
                <Dropdown id="dropdownMenuLink" dataToggle="dropdown" title="Mens" data={navMens}/>
                <Dropdown id="dropdownMenuLink" dataToggle="dropdown" title="Womens" data={navWomens}/>
                <li className="nav-item">
                    <a className="nav-link text-success" href="#">Own shopping</a>
                </li>
            </ul>
            <SearchInput />
        </div>
    );
}

export default Nav;
