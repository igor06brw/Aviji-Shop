import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingItem = (props) => {
    return (
        <tr>
            <td headers="product" scope="row">
                <Link to={`/product/${1}`}>
                    <img />
                    <h6>Example tshirt</h6>
                </Link>
            </td>
            <td headers="price">$64.23</td>
            <td headers="quantity">1</td>
            <td headers="actions">Delete</td>
        </tr>
    );
}

export default ShoppingItem;
