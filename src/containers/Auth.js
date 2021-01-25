import React, { Component } from 'react';
import Register from '../components/Auth/Register/Register';
import Login from '../components/Auth/Login/Login';

class Auth extends Component {
    state = {
        description: 'Sign in or Register'
    };
    



    render() {
        console.log(this.props)
        return (
            <div className="d-flex justify-content-center container">   
                <Login />
                <Register />
            </div>
        );
    }
}

export default Auth;
