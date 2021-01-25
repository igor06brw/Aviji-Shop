import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"

class PrivateRoute extends Component {

    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={props =>
                this.props.currentUser !== null ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to="/auth"/>
                )
            }/>
        );
    }
}

export default PrivateRoute;
