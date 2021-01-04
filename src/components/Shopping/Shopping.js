import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import ShoppingOrder from './ShoppingOrder/ShoppingOrder';

class Shopping extends Component {
    render() {
        return (
            <div className="container">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col col-lg-2">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty.</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ShoppingItem />
                    </tbody>
                </table>
               <ShoppingOrder />
            </div>
        );
    }
}

export default Shopping;

