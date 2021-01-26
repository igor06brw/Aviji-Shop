import React, { createRef } from 'react';
import { connect } from "react-redux";
import { register } from "../../../redux/actions/auth"
import cogoToast from 'cogo-toast';

const Register = ({ register, history }) => {
    const email = createRef();
    const password = createRef();
    const confirmPassword = createRef();

    const handleSubmit = event => {
        
        event.preventDefault();
        if(password.current.value === confirmPassword.current.value) {
            register(email.current.value, password.current.value)
            .then(() => {
                cogoToast.success('User is logout sucessfully!');
                history.push("/")
            })
            .catch(error => {
                cogoToast.error(error.message);
            })
        } else {
            cogoToast.warn('Password is not equal!');
        }
    }


    return (
        <div className="p-5 col">
            <form onSubmit={handleSubmit}>
                <h2 className="display-4 pb-4">Register</h2>
                <div className="mb-3 ">
                    <label for="registerEmail" className="form-label">Your Email...</label>
                    <input 
                        name="email"    
                        type="email" 
                        className="form-control" 
                        id="registerEmail"
                        ref={email} 
                        aria-describedby="emailHelp" 
                    />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="registerPassword" className="form-label">Your password...</label>
                    <input 
                        name="password"
                        type="password" 
                        className="form-control" 
                        id="registerPassword" 
                        autoComplete="none"
                        ref={password}
                    />
                </div>
                <div className="mb-3">
                    <label for="registerConfirmPassword" className="form-label">Confirm password...</label>
                    <input 
                        name="confirmPassword"
                        type="password" 
                        className="form-control" 
                        id="registerConfirmPassword"
                        autoComplete="none"
                        ref={confirmPassword} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="registerNewspaper" />
                    <label className="form-check-label" for="registerNewspaper">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</label>
                </div>
                <button type="submit" className="btn btn-lg btn-light">Create Account</button>
            </form>
        </div>
    );
}

export default connect(null, { register })(Register)
