import React, { Component } from 'react';
import Register from './Register/Register';
import Login from './Login/Login';

class Auth extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center container">   
                <Login />
                <Register />
            </div>
        );
    }
}

export default Auth;
