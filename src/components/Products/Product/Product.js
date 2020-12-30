import React from 'react';
import card1 from '../../../assets/card/1.jpg'
const Product = (props) => {
    return (
        <div className="col mb-4">
            <div className="card">
                <img src={card1} className="card-img-top image-fit" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.product.heading}</h5>
                    <p className="card-text">{props.product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
