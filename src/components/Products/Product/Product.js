import React, { useState } from 'react';
import card1 from '../../../assets/card/1.jpg'
const Product = (props) => {
    const [hover, setHover] = useState(false);

    let onHoverInfo = <img src={card1} className="card-img-top image-fit" alt="..."/>
    
    if(hover === true) {
        onHoverInfo = (
            <div>
                <img src={card1} className="card-img-top image-fit" alt="..."/>
                <div className="card-body">
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
