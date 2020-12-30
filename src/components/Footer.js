import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer className="">
            <div className="">
                <nav className="footer-nav d-flex flex-row">
                    <ul className="footer-link-list list-group list-unstyled text-left">
                        <p>Your account</p>
                        <li><a href="#" className="text-decoration-none">Sign in</a></li>
                        <li><a href="#" className="text-decoration-none">Register</a></li>
                        <li><a href="#" className="text-decoration-none">View cart</a></li>
                        <li><a href="#" className="text-decoration-none">View your lookbook</a></li>
                        <li><a href="#" className="text-decoration-none">Track and order</a></li>
                        <li><a href="#" className="text-decoration-none">Update information</a></li>
                    </ul>
                    <ul className="footer-link-list list-group list-unstyled text-left">
                        <p>Lookbook</p>
                        <li><a href="#" className="text-decoration-none">Latest posts</a></li>
                        <li><a href="#" className="text-decoration-none">Men's lookbook</a></li>
                        <li><a href="#" className="text-decoration-none">Women's lookbook</a></li>
                        <li><a href="#" className="text-decoration-none">Lookbook RSS feed</a></li>
                        <li><a href="#" className="text-decoration-none">View your lookbook</a></li>
                        <li><a href="#" className="text-decoration-none">Delete your lookbook</a></li>
                    </ul>
                    <ul className="footer-link-list list-group list-unstyled text-left">
                        <p>Contact details</p>
                        <li><a href="#" className="text-decoration-none">Head Office: Aviji Shop, 123-456 Bishop Street, Los Stantos</a></li>
                        <li><a href="tel:0123-456-789" className="text-decoration-none">Telephone: 0123-456-789</a></li>
                        <li><a href="mailto:support@avijishop.com" className="text-decoration-none">Email: support@avijishop.com</a></li>
                    </ul>
                </nav>
            </div>
            <div>

            </div>
        </footer>
    );
}

export default Footer;
