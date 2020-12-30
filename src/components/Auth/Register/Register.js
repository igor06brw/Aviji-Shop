import React from 'react';

const Register = () => {
    return (
        <div className="p-5 col">
            <form>
                <h2 className="display-4 pb-4">Register</h2>
                <div className="mb-3 ">
                    <label for="registerEmail" className="form-label">Your Email...</label>
                    <input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="registerPassword" className="form-label">Your password...</label>
                    <input type="password" className="form-control" id="registerPassword" />
                </div>
                <div className="mb-3">
                    <label for="registerConfirmPassword" className="form-label">Confirm password...</label>
                    <input type="password" className="form-control" id="registerConfirmPassword" />
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

export default Register;
