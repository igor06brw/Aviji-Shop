import React from 'react';

const ProductDetail = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Product Detail {props.type}</h1>
        </div>
    );
}

export default ProductDetail;
