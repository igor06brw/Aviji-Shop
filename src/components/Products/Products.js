import React, { Component } from 'react';
import Product from './Product/Product';
import OutfitAPI from '../data/API';
import ReactPagination from 'react-paginate';
import '../../styles/Products.css';


class Products extends Component {
    
    state = {
        products: [],
        offset: 0,
        perPage: 3,
        currentPage: 0
    }

    componentDidMount() {
        this.getAllProducts(OutfitAPI.allOutfits());
    }

    getAllProducts(props) {
        const products = props;
        const slice = products.slice(this.state.offset, this.state.offset + this.state.perPage);
        const productsPerPage = slice.map(el => <Product product={el}/>)

        this.setState({
            pageCount: Math.ceil(products.length / this.state.perPage),
            productsPerPage
        })
        console.log(products);
    }
    
    render() {
        return (
            <main className="container border-top mt-5 pl-0">
                <nav className="nav my-3">
                    <a className="nav-link text-success" href="#">Popular</a>
                    <a className="nav-link text-success" href="#">New arrivals</a>
                    <a className="nav-link text-success" href="#">Best sellers</a>
                    <a className="nav-link text-success" href="#">Special offers</a>
                </nav>
                <div className="row row-cols-1 row-cols-md-3">
                    {this.state.productsPerPage}
                </div>
            </main>
        );
    }
}

export default Products;
