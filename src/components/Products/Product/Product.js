import React from 'react';
import card1 from '../../../assets/card/1.jpg'
const Product = () => {
    return (
        <div className="col mb-4">
            <div className="card">
                <img src={card1} className="card-img-top image-fit" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
