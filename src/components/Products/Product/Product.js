import React, { useState } from 'react';
import card1 from '../../../assets/card/1.jpg'
import '../../../styles/Product.css'
import '../../../styles/Customize/Custom__Animate.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const [hover, setHover] = useState(false);

    let onHoverInfo;
    
    if(hover === true) {
        onHoverInfo = (
            <div className="text-of-absolute animate__animated animate__fadeInDown">
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
                <h5 className="position-absolute font-weight-bold text-dark m-1">${props.product.price}</h5>
                <Link to="/product/:id" className="position-absolute product-details btn btn-secondary m-1">Details</Link>
                <Link className="position-absolute product-cart btn btn-danger m-1">Add to cart</Link>
                {onHoverInfo}
            </div>
        </div>
    );
}

export default Product;
