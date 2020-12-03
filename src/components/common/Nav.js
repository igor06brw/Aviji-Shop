import React from 'react';
import Logo from './Logo';

const Nav = () => {
    return (
        <div className="container d-inline-flex align-items-center justify-content-between">
            <Logo />
            <ul className="nav py-5 justify-content-end ">
                <li className="nav-item">
                    <a className="nav-link text-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mens</a>
                    
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <div className="d-flex">
                            <div className="mx-2">
                                <h6 className="font-weight-bold">Casual </h6>
                                <a class="dropdown-item" href="#">T-Shirt</a>
                                <a class="dropdown-item" href="#">Hoodies</a>
                                <a class="dropdown-item" href="#">Jackets</a>
                            </div>
                            <div className="mx-2">
                                <h6 className="font-weight-bold">Formal </h6>
                                <a class="dropdown-item" href="#">Jacket</a>
                                <a class="dropdown-item" href="#">Suit</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Womens</a>
                        
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <div className="d-flex">
                            <div className="mx-2">
                                <h6 className="font-weight-bold">Casual </h6>
                                <a class="dropdown-item" href="#">T-Shirt</a>
                                <a class="dropdown-item" href="#">Hoodies</a>
                                <a class="dropdown-item" href="#">Jackets</a>
                            </div>
                            <div className="mx-2">
                                <h6 className="font-weight-bold">Formal </h6>
                                <a class="dropdown-item" href="#">Dress</a>
                                <a class="dropdown-item" href="#">Suit</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-success" href="#">Own shopping</a>
                </li>
            </ul>

        </div>
    );
}

export default Nav;
