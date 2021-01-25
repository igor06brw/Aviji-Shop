import React from 'react';
import Dropdown from './Dropdown';
import Logo from './Logo';
import { navMens, navWomens } from '../../redux/store/nav';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="container">
            <div className="row">
                <div className="col d-inline-flex align-items-center justify-content-between">
                <Link to="/" className="nav-link text-dark">
                        <Logo/>
                    </Link>
                    <ul className="nav py-5 justify-content-end">
                        <Dropdown id="dropdownMenuLink" dataToggle="dropdown" title="Mens" data={navMens}/>
                        <Dropdown id="dropdownMenuLink" dataToggle="dropdown" title="Womens" data={navWomens}/>
                        <li className="nav-item">
                            <Link className="nav-link text-success" to="/shopping">Own shopping</Link>
                        </li>
                    </ul>
                    <SearchInput />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
