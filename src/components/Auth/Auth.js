import React, { Component } from 'react';
import Register from './Register/Register';
import Login from './Login/Login';

class Auth extends Component {
    render() {
        return (
            <div>   
                <Register />
                <Login />
            </div>
        );
    }
}

export default Auth;
