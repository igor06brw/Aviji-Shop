import React, { Component } from 'react';
import Product from '../components/Products/Product/Product';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom'
import '../styles/Products.css';
import { connect } from 'react-redux';


class Products extends Component {
    
    state = {
        products: [],
        offset: 0,
        perPage: 6,
        currentPage: 0
    }

    componentDidMount() {
        this.getAllProducts(this.props.outfit.allOutfits());
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
            this.getAllProducts(this.props.outfit.allOutfits());
        })
    }
    
    render() {
        return (
            <main className="container border-top mt-5 pl-0">
                <nav className="nav my-3">
                    <Link className="nav-link text-success" href="#">Popular</Link>
                    <Link className="nav-link text-success" href="#">New arrivals</Link>
                    <Link className="nav-link text-success" href="#">Best sellers</Link>
                    <Link className="nav-link text-success" href="#">Special offers</Link>
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
