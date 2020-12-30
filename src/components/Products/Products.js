import React, { Component } from 'react';
import Product from './Product/Product';

import '../../styles/Products.css'

class Products extends Component {
    state = [
        {
            heading: 'Example t-shirt 1',
            description: 'Example description 1',
            price: 1.23
        },
        {
            heading: 'Example t-shirt 2',
            description: 'Example description 2',
            price: 2.23
        },
        {
            heading: 'Example t-shirt 3',
            description: 'Example description 3',
            price: 3.23
        },
        {
            heading: 'Example t-shirt 4',
            description: 'Example description 4',
            price: 4.23
        },
        {
            heading: 'Example t-shirt 5',
            description: 'Example description 5',
            price: 5.23
        },
        {
            heading: 'Example t-shirt 6',
            description: 'Example description 6',
            price: 6.23
        },
    ]
    
    render() {
        const products = this.state;
        console.log(products)
        return (
            <main className="container border-top mt-5 pl-0">
                <nav className="nav my-3">
                    <a className="nav-link text-success" href="#">Popular</a>
                    <a className="nav-link text-success" href="#">New arrivals</a>
                    <a className="nav-link text-success" href="#">Best sellers</a>
                    <a className="nav-link text-success" href="#">Special offers</a>
                </nav>
                <div className="row row-cols-1 row-cols-md-3">
                    {products.map(product => (
                        <Product product={product}/>
                    ))}
                </div>
            </main>
        );
    }
}

export default Products;
