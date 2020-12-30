import React from 'react';

const Login = () => {
    return (
        <div className="p-5 col">
            <form>
                <h2 className="display-4 pb-4">Login</h2>
                <div className="mb-3">
                    <label for="loginEmail" className="form-label">Your Email...</label>
                    <input type="email" className="form-control" id="loginEmail" required/>
                </div>
                <div className="mb-3">
                    <label for="loginPassword" className="form-label">Your Password...</label>
                    <input type="password" className="form-control" id="loginPassword" />
                </div>
                <button type="submit" className="btn btn-lg btn-success">Sign in</button>
            </form>
        </div>
    );
}

export default Login;
