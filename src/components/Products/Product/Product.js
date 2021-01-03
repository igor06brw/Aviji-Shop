import React, { useState } from 'react';
import card1 from '../../../assets/card/1.jpg'
import '../../../styles/Product.css'

const Product = (props) => {
    const [hover, setHover] = useState(false);

    let onHoverInfo;
    
    if(hover === true) {
        onHoverInfo = (
            <div className="text-of-absolute">
                <div className="position-absolute card-body col bg-light border border-top-0">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">{props.product.type}</p>
                </div>
            </div>
        )
    }



    return (
        <div className="col mb-4">
            <div className="card position-relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img src={card1} className="card-img-top image-fit" alt="..."/>
                <p className="position-absolute text-teal-900 fw-bold">{props.product.price}</p>
                {onHoverInfo}
            </div>
        </div>
    );
}

export default Product;
