import React from 'react';

const ShoppingOrder = (props) => {
    return (
        <div className="bg-light text-center mb-4">
            <h2 className="bg-secondary py-2">Summary: </h2>
            <h3 className="h3 py-2 text-info">${props.summary}</h3>
        </div>
    );
}

export default ShoppingOrder;
