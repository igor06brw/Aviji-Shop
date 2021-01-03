import React, { Component } from 'react';
import Product from './Product/Product';
import OutfitAPI from '../data/API';
import ReactPaginate from 'react-paginate';
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

    handlePageClick = (data) => {
        console.log(data);
        const selectedPage = data.selected;
        const offset = Math.ceil(selectedPage  * this.state.perPage);

        this.setState({ offset: offset }, () => {
            this.getAllProducts(OutfitAPI.allOutfits());
        })
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
                <div className="row row-cols-1 row-cols-md-3 justify-content-center">
                    {this.state.productsPerPage}
                    <ReactPaginate
                        previousLabel={"«"}
                        nextLabel={"»"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        activeClassName={"active"}
                        previousLinkClassName={"page-link"}
                        nextLinkClassName={"page-link"}
                        disabledClassName={"page-item disabled"}/>
                        
                </div>
            </main>
        );
    }
}

export default Products;
