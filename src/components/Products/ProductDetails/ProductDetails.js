import React from 'react';
import '../../../styles/ProductDetail.css'

const ProductDetail = (props) => {
    console.log(props);
    return (
        <div className="container my-4">
            <div className="row">
                <div className="detail-container col">
                    <img src={props.image} alt={props.type}/>
                </div>
                <div className="detail-container col">
                    <h3 className="detail-heading mb-5 text-center">{props.name}</h3>
                    <p className="detail-description">{props.description}</p>
                    <p className="detail-price mx-2">Price: <span>${props.price}</span></p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
