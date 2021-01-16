import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer>
            <div>
                <nav className="footer-nav d-flex flex-row">
                    <ul className="footer-link-list list-group list-unstyled text-left">
                        <p>Your account</p>
                        <li><Link href="#" className="text-decoration-none">Sign in</Link></li>
                        <li><Link href="#" className="text-decoration-none">Register</Link></li>
                        <li><Link href="#" className="text-decoration-none">View cart</Link></li>
                        <li><Link href="#" className="text-decoration-none">View your lookbook</Link></li>
                        <li><Link href="#" className="text-decoration-none">Track and order</Link></li>
                        <li><Link href="#" className="text-decoration-none">Update information</Link></li>
                    </ul>
                    <ul className="footer-link-list list-group list-unstyled text-left">
                        <p>Lookbook</p>
                        <li><Link href="#" className="text-decoration-none">Latest posts</Link></li>
                        <li><Link href="#" className="text-decoration-none">Men's lookbook</Link></li>
                        <li><Link href="#" className="text-decoration-none">Women's lookbook</Link></li>
                        <li><Link href="#" className="text-decoration-none">Lookbook RSS feed</Link></li>
                        <li><Link href="#" className="text-decoration-none">View your lookbook</Link></li>
                        <li><Link href="#" className="text-decoration-none">Delete your lookbook</Link></li>
                    </ul>
                    <ul className="footer-link-list list-group list-unstyled text-left">
                        <p>Contact details</p>
                        <li><Link href="#" className="text-decoration-none">Head Office: Aviji Shop, 123-456 Bishop Street, Los Stantos</Link></li>
                        <li><Link href="tel:0123-456-789" className="text-decoration-none">Telephone: 0123-456-789</Link></li>
                        <li><Link href="mailto:support@avijishop.com" className="text-decoration-none text-wrap">Email: support@avijishop.com</Link></li>
                    </ul>
                </nav>
            </div>
            <div>

            </div>
        </footer>
    );
}

export default Footer;
