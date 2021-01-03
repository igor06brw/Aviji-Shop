import { data } from 'jquery';
import React from 'react';

const Dropdown = ({id, dataToggle, title, data }) => {
    console.log(id, dataToggle, title)
    return (
        <li className="nav-item">
            <a 
                className="nav-link text-success dropdown-toggle" 
                href="#" 
                role="button" 
                id={id} 
                data-toggle={dataToggle} 
                aria-haspopup="true" 
                aria-expanded="false"
            >{title}</a>

            <div className="dropdown-menu" aria-labelledby={id}>
                <div className="d-flex my-2">
                    <div className="mx-2">
                        <h6 className="font-weight-bold">Casual</h6>
                        <a className="dropdown-item" href="#">{data[0]}</a>
                        <a className="dropdown-item" href="#">{data[1]}</a>
                        <a className="dropdown-item" href="#">{data[2]}</a>
                    </div>
                    <div className="mx-2">
                        <h6 className="font-weight-bold">Formal </h6>
                        <a className="dropdown-item" href="#">{data[3]}</a>
                        <a className="dropdown-item" href="#">{data[4]}</a>
                        <a className="dropdown-item" href="#">{data[5]}</a>
                    </div>
                </div>
                <div className="promotion bg-dark mx-3 text-center">
                    <h2 className="promotion-text p-2 text-light text-wrap"><span className="font-weight-bold">Winter sale! </span>Up to 50% off</h2>
                </div>
            </div>
        </li>
    );
}

export default Dropdown;
