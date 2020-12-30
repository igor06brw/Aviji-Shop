import React from 'react';

const Register = () => {
    return (
        <div className="p-5 col">
            <form>
                <h2>Register</h2>
                <div class="mb-3 ">
                    <label for="registerEmail" class="form-label">Your Email...</label>
                    <input type="email" class="form-control" id="registerEmail" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="registerPassword" class="form-label">Your password...</label>
                    <input type="password" class="form-control" id="registerPassword" />
                </div>
                <div class="mb-3">
                    <label for="registerConfirmPassword" class="form-label">Confirm password...</label>
                    <input type="password" class="form-control" id="registerConfirmPassword" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="registerNewspaper" />
                    <label class="form-check-label" for="registerNewspaper">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</label>
                </div>
                <button type="submit" class="btn btn-lg btn-light">Create Account</button>
            </form>
        </div>
    );
}

export default Register;
