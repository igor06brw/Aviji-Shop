import React, { Component } from 'react';
import Product from './Product/Product';
import OutfitAPI from '../data/API';
import '../../styles/Products.css'

class Products extends Component {
    
    state = {
        products: [],
        offset: 0,
        perPage: 6,
        currentPage: 0
    }
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getAllProducts(OutfitAPI.allOutfits());
    }

    getAllProducts(props) {
        const products = props;
        console.log(products);
    }
    
    render() {
        const products = this.state;
        return (
            <main className="container border-top mt-5 pl-0">
                <nav className="nav my-3">
                    <a className="nav-link text-success" href="#">Popular</a>
                    <a className="nav-link text-success" href="#">New arrivals</a>
                    <a className="nav-link text-success" href="#">Best sellers</a>
                    <a className="nav-link text-success" href="#">Special offers</a>
                </nav>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        OutfitAPI.allOutfits().map(product => (
                            <Product product={product}/>
                        ))
                    }
                </div>
            </main>
        );
    }
}

export default Products;
