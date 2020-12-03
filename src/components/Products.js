import React from 'react';
import card1 from '../assets/card/1.jpg'
import card2 from '../assets/card/2.jpg'
import card3 from '../assets/card/3.jpg'
import card4 from '../assets/card/4.jpg'
import card5 from '../assets/card/5.jpg'
import card6 from '../assets/card/6.jpg'

import '../styles/Products.css'

import '../assets/card/1.jpg'

const Products = () => {
    return (
        <main className="container border-top mt-5 pl-0">
            <nav className="nav my-3">
                <a className="nav-link text-success" href="#">Popular</a>
                <a className="nav-link text-success" href="#">New arrivals</a>
                <a className="nav-link text-success" href="#">Best sellers</a>
                <a className="nav-link text-success" href="#">Special offers</a>
            </nav>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card">
                        <img src={card1} className="card-img-top image-fit" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={card2} className="card-img-top image-fit" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={card4} className="card-img-top image-fit" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={card5} className="card-img-top image-fit" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={card1} className="card-img-top image-fit" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={card6} className="card-img-top image-fit" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Products;
