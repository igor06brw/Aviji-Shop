import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/ShoppingItem.css'

const ShoppingItem = (props) => {
    console.log(props);
    return (
        <tr>
            <td headers="product" scope="row">
                <Link className="d-flex align-self-center shopping-item-link" to={`/product/${1}`}>
                    <img className="shopping-item-image align-self-center" src={props.shoppingCart.image}/>
                    <h6 className="text-info pl-4">{props.shoppingCart.name}</h6>
                </Link>
            </td>
            <td headers="price">{props.shoppingCart.price}</td>
            <td headers="quantity">{props.shoppingCart.quantity}</td>
            <td headers="actions">Delete</td>
        </tr>
    );
}

export default ShoppingItem;
