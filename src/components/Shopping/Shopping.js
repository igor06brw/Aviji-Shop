import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import ShoppingOrder from './ShoppingOrder/ShoppingOrder';
import { connect } from 'react-redux';

class Shopping extends Component {
    

    constructor(props) {
        super(props);
        
        this.state = {
            shopping: props.shopping,
            countedShoppingList: [],
            summaryOfOrder: 0
        }
    }

    onShoppingList = (shoppingList) => {
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
        this.onCalculateOrder(_tempSortedShoppingList)
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

    onCalculateOrder = (list) => {
        let calculate = 0;
        list.forEach((el, index) => {
            calculate += Number((el[0].price * el[1].qty).toFixed(2));
        })
        this.setState({ summaryOfOrder: calculate })
    }

     componentDidMount() {
         this.onShoppingList(this.state.shopping);
     }
    
    componentDidUpdate(prevProps) {
        if(prevProps.shopping !== this.props.shopping) {
            this.setState({ shopping: this.props.shopping }, () => { this.onShoppingList(this.state.shopping) })
        }
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
                            <ShoppingItem shoppingCart={shoppingItem[0]} shoppingQuantity={shoppingItem[1]} onDelete={this.onDeleteFromList}/>
                        ))}
                    </tbody>
                </table>
               <ShoppingOrder summary={this.state.summaryOfOrder}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({ shopping: state.shopping })

export default connect(mapStateToProps)(Shopping);

