import React, { Component } from 'react';
import Register from '../components/Auth/Register/Register';
import Login from '../components/Auth/Login/Login';
import { connect } from 'react-redux';

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: 'Sign in or Register',
        }
    }

    onAuthorizedUser() {
        console.log(this.props.uid);
        return this.props.uid !== undefined ? <><Login history={this.props.history}/><Register history={this.props.history}/></> : <p>LOGOUT</p>;
        
    }



    render() {
        return (
            <div className="d-flex justify-content-center container">   
                {this.onAuthorizedUser()}
            </div>
        );
    }
}

const mapStateToProps = state => (state.currentUser)

export default connect(mapStateToProps)(Auth);
