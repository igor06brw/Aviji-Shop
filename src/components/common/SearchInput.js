import React from 'react';

const SearchInput = () => {
    return (
        <div className="col-md-4">
            <div className="input-group">
                <input className="form-control py-2 border-right-0 border" type="text" id="example-search-input" />
                <span className="input-group-append">
                    <div className="input-group-text bg-transparent"><i className="fa fa-search"></i></div>
                </span>
            </div>
        </div>
    );
}

export default SearchInput;
