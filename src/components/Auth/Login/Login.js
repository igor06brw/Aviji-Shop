import React from 'react';

const Login = () => {
    return (
        <div className="p-5 col">
            <form>
                <h2 className="display-6">Login</h2>
                <div class="mb-3">
                    <label for="loginEmail" class="form-label">Your Email...</label>
                    <input type="email" class="form-control" id="loginEmail" required/>
                </div>
                <div class="mb-3">
                    <label for="loginPassword" class="form-label">Your Password...</label>
                    <input type="password" class="form-control" id="loginPassword" />
                </div>
                <button type="submit" class="btn btn-lg btn-success">Sign in</button>
            </form>
        </div>
    );
}

export default Login;
