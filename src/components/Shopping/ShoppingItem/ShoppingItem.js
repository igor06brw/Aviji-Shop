import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/ShoppingItem.css'

const ShoppingItem = (props) => {
    console.log(props)
    return (
        <tr className="table-light text-dark">
            <td headers="product" scope="row">
                <Link className="d-flex align-self-center shopping-item-link text-decoration-none" to={`/product/${props.shoppingCart.id}`}>
                    <img className="shopping-item-image align-self-center" src={props.shoppingCart.image}/>
                    <h6 className="text-info pl-4">{props.shoppingCart.name}</h6>
                </Link>
            </td>
            <td headers="price">${props.shoppingCart.price}</td>
            <td headers="quantity">{props.shoppingQuantity.qty}</td>
            <td headers="actions">Delete</td>
        </tr>
    );
}

export default ShoppingItem;
