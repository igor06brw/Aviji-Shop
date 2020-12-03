import { data } from 'jquery';
import React from 'react';

const Dropdown = ({id, dataToggle, title}) => {
    console.log(id, dataToggle, title)
    return (
        <li className="nav-item">
            <a className="nav-link text-success dropdown-toggle" href="#" role="button" id={id} data-toggle={dataToggle} aria-haspopup="true" aria-expanded="false">{title}</a>

            <div className="dropdown-menu" aria-labelledby={id}>
                <div className="d-flex">
                    <div className="mx-2">
                        <h6 className="font-weight-bold">Casual </h6>
                        <a className="dropdown-item" href="#">T-Shirt</a>
                        <a className="dropdown-item" href="#">Hoodies</a>
                        <a className="dropdown-item" href="#">Jackets</a>
                    </div>
                    <div className="mx-2">
                        <h6 className="font-weight-bold">Formal </h6>
                        <a className="dropdown-item" href="#">Jacket</a>
                        <a className="dropdown-item" href="#">Suit</a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Dropdown;
