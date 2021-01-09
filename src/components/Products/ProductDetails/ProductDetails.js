import React from 'react';
import '../../../styles/ProductDetail.css'
import { useHistory } from 'react-router-dom';


const ProductDetail = (props) => {

    const history = useHistory();
    console.log(props);
    console.log(history);
    return (
        <div className="container my-4">
            <div className="row">
                <div className="detail-container col">
                    <img src={props.image} alt={props.type}/>
                </div>
                <div className="detail-container col">
                    <div className="row">
                        <h3 className="detail-heading mb-5 text-center">{props.name}</h3>
                        <p className="detail-description">{props.description}</p>
                        <p className="detail-price mx-2">Price: <span>${props.price}</span></p>
                    </div>
                    <div className="row">
                        <button onClick={() => history.goBack()} className="btn btn-info mx-3">Back</button>
                        <button className="btn btn-danger mx-3">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
