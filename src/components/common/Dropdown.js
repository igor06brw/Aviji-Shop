import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({id, dataToggle, title, data }) => {
    return (
        <li className="nav-item">
            <Link 
                className="nav-link text-success dropdown-toggle" 
                href="#" 
                role="button" 
                id={id} 
                data-toggle={dataToggle} 
                aria-haspopup="true" 
                aria-expanded="false"
            >{title}</Link>

            <div className="dropdown-menu" aria-labelledby={id}>
                <div className="d-flex my-2">
                    <div className="mx-2">
                        <h6 className="font-weight-bold">Casual</h6>
                        <Link className="dropdown-item" href="#">{data[0]}</Link>
                        <Link className="dropdown-item" href="#">{data[1]}</Link>
                        <Link className="dropdown-item" href="#">{data[2]}</Link>
                    </div>
                    <div className="mx-2">
                        <h6 className="font-weight-bold">Formal </h6>
                        <Link className="dropdown-item" href="#">{data[3]}</Link>
                        <Link className="dropdown-item" href="#">{data[4]}</Link>
                        <Link className="dropdown-item" href="#">{data[5]}</Link>
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
