import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingItem = (props) => {
    console.log(props);
    return (
        <tr>
            <td headers="product" scope="row">
                <Link to={`/product/${1}`}>
                    <img src={props.shoppingCart.image}/>
                    <h6>{props.shoppingCart.name}</h6>
                </Link>
            </td>
            <td headers="price">{props.shoppingCart.price}</td>
            <td headers="quantity">{props.shoppingCart.quantity}</td>
            <td headers="actions">Delete</td>
        </tr>
    );
}

export default ShoppingItem;
