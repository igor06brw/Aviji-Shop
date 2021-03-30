import React, { createRef } from 'react';
import { connect } from "react-redux";
import cogoToast from 'cogo-toast';

const Login = ({ login, history }) => {
    const email = createRef();
    const password = createRef();


    const handleSubmit = event => {
        event.preventDefault()
        login(email.current.value, password.current.value)
            .then(() => {
                cogoToast.success('Login sucessfully!');
                history.push("/")
            })
            .catch(error => {
                cogoToast.error(error.message);
            })
    }

    return (
        <div className="p-5 col">
            <form onSubmit={handleSubmit} >
                <h2 className="display-4 pb-4">Login</h2>
                <div className="mb-3">
                    <label for="loginEmail" className="form-label">Your Email...</label>
                    <input 
                        name="email"
                        type="email" 
                        className="form-control" 
                        id="loginEmail" 
                        ref={email}
                        required/>
                </div>
                <div className="mb-3">
                    <label for="loginPassword" className="form-label">Your Password...</label>
                    <input 
                        name="password"
                        type="password" 
                        className="form-control" 
                        id="loginPassword" 
                        autoComplete="none"
                        ref={password}
                    />
                </div>
                <button type="submit" className="btn btn-lg btn-success">Sign in</button>
            </form>
        </div>
    );
}

export default Login;
