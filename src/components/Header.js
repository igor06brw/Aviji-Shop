import React, { Component } from 'react';
import Navbar from './Navbar';
import "../styles/Header.css"
import { withRouter } from 'react-router-dom';
import descriptions from './data/description';

class Header extends Component { 
    state = {
        description: '',
        location: ''
    }
    
    componentDidMount() {
        this.findDescription(this.props.location.pathname)
    }
    componentDidUpdate(prevValue) {
        if(prevValue !== this.props) {
            this.findDescription(this.props.location.pathname)
        }
    }


    findDescription = (event) => {
        descriptions.find(desc => {
            for(let key in desc) {
                let __tempString = '/' + key
                if(event === '/' && key === 'home') {
                    this.setState({description: desc[key]})
                    
                }
                if(__tempString === event) {
                    this.setState({description: desc[key]})
                }
            }
        })
    }

    render() {
        return (
            <header>
                <Navbar />
                <div className="image-of-background">
                    <div className="container">
                        <h1 className="font-weight-bold text-light header-title">Aviji Shop</h1>
                        <p className="font-weight-light text-light header-description">{this.state.description}</p>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);
