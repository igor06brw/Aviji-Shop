import React, { Component, useState } from 'react';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import ShoppingOrder from './ShoppingOrder/ShoppingOrder';
import { connect } from 'react-redux';

class Shopping extends Component {
    

    constructor(props) {
        super(props);
        
        this.state = {
            shopping: props.shopping,
            countedShoppingList: []
        }
    }

    onSortOfShoppingItem = (shoppingList) => {
        let _tempShoppingList = [];
        let _tempSortedShoppingList = [];
        shoppingList.forEach((item) => {
            if(_tempShoppingList.includes(item)) {
                this.onCountFromDuplicate(_tempSortedShoppingList, item);
            }
            if(!_tempShoppingList.includes(item)) {
                let _tempArray = []
                _tempShoppingList.push(item)
                _tempArray.push(item, { qty: 1})
                _tempSortedShoppingList.push(_tempArray);
            }
        })
        this.setState({ countedShoppingList: _tempSortedShoppingList})
    }

    onCountFromDuplicate = (array, item) => {
        const idFromItem = Object.keys(item).includes("id") ? item.id : null;
        array.forEach((el) => { 
            if(idFromItem === el[0].id) {
                el[1].qty += 1
            }
        })
    }

    componentDidMount() {
        this.onSortOfShoppingItem(this.state.shopping);
    }

    render() {
        return (
            <div className="container">
                <table class="table table-secondary table-hover table-borderless">
                    <thead>
                        <tr>
                            <th id="product" scope="col col-lg-2">Product</th>
                            <th id="price" scope="col">Price</th>
                            <th id="quantity" scope="col">Qty.</th>
                            <th id="actions" scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.countedShoppingList.map(shoppingItem => (
                            console.log(this.countedShoppingList),
                            <ShoppingItem shoppingCart={shoppingItem[0]} shoppingQuantity={shoppingItem[1]} />
                        ))}
                    </tbody>
                </table>
               <ShoppingOrder />
            </div>
        );
    }
}

const mapStateToProps = state => ({ shopping: state.shopping })

export default connect(mapStateToProps)(Shopping);

