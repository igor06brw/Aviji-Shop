import React from 'react';

const ProductDetail = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="detail-container col">
                <img src={props.image} alt={props.type}/>
            </div>
            <div className="detail-container col">
                <h3 className="detail-heading">{props.name}</h3>
            </div>
        </div>
    );
}

export default ProductDetail;
