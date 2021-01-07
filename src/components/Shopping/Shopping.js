import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import ShoppingOrder from './ShoppingOrder/ShoppingOrder';
import { connect } from 'react-redux';

class Shopping extends Component {
    


    render() {
        console.log(this.props.shopping);
        return (
            <div className="container">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th id="product" scope="col col-lg-2">Product</th>
                            <th id="price" scope="col">Price</th>
                            <th id="quantity" scope="col">Qty.</th>
                            <th id="actions" scope="col">Remove</th>
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

const mapStateToProps = state => ({ shopping: state.shopping })

export default connect(mapStateToProps)(Shopping);

