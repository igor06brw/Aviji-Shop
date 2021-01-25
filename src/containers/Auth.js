import React, { Component } from 'react';
import Register from '../components/Auth/Register/Register';
import Login from '../components/Auth/Login/Login';
import Logout from '../components/Auth/Logout/Logout';
import { connect } from 'react-redux';

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: 'Sign in or Register',
        }
        console.log(this.props.currentUser);
    }

    onAuthorizedUser() {
        console.log(this);
        return this.props.currentUser === null ? <><Login history={this.props.history}/><Register history={this.props.history}/></> : <p><Logout history={this.props.history}/></p>;
        
    }



    render() {
        return (
            <div className="d-flex justify-content-center container">   
                {this.onAuthorizedUser()}
            </div>
        );
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser })

export default connect(mapStateToProps)(Auth);
