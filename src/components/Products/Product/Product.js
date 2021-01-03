import React, { useState } from 'react';
import card1 from '../../../assets/card/1.jpg'
import '../../../styles/Product.css'

const Product = (props) => {
    const [hover, setHover] = useState(false);

    let onHoverInfo = <img src={card1} className="card-img-top image-fit" alt="..."/>
    
    if(hover === true) {
        onHoverInfo = (
            <div className="position-relative text-of-absolute">
                <img src={card1} className="card-img-top image-fit" alt="..."/>
                <div className="position-absolute card-body col bg-light border border-top-0">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">{props.product.type}</p>
                </div>
            </div>
        )
    }



    return (
        <div className="col mb-4">
            <div className="card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {onHoverInfo}
            </div>
        </div>
    );
}

export default Product;
