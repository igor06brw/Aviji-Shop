import React, { Component } from 'react';
import Product from './Product/Product';
import OutfitAPI from '../data/API';
import ReactPaginate from 'react-paginate';
import '../../styles/Products.css';
import { connect } from 'react-redux';


class Products extends Component {
    
    state = {
        products: [],
        offset: 0,
        perPage: 6,
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
    }

    handlePageClick = (data) => {
        const selectedPage = data.selected;
        const offset = Math.ceil(selectedPage  * this.state.perPage);

        this.setState({ offset: offset }, () => {
            this.getAllProducts(OutfitAPI.allOutfits());
        })
    }
    
    render() {
        console.log(this.props)
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
                <div className="col">
                        <ReactPaginate
                            previousLabel={"«"}
                            nextLabel={"»"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination justify-content-center"}
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

const mapStateToProps = state => ({ outfit: state.outfit })
export default connect(mapStateToProps)(Products);
