import React, { Component } from 'react';
import Header from './../components/Header';
import Footer from "./../components/Footer";

class Layout extends Component {
    
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>  
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout;
