import React, { createRef } from 'react';
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/firebase"
import cogoToast from 'cogo-toast';

const Logout = ({ logout, history }) => {

    const handleSubmit = event => {
        
        event.preventDefault();
        logout()
        .then(() => {
            cogoToast.success('User is logout sucessfully!');
            history.push("/")
        })
        .catch(error => {
            cogoToast.error(error.message);
        })
    }


    return (
        <div className="p-5 col text-center">
            <form onSubmit={handleSubmit}>
                <h2 className="display-4 pb-4">Logout</h2>
                <button type="submit" className="btn btn-lg btn-danger">Logout</button>
            </form>
        </div>
    );
}

export default connect(null, { logout })(Logout)
