import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-media">
                    <a href="#facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="#twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="#instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="policy-links">
                    <a href="#privacy-policy">Privacy Policy</a>
                    <a href="#terms-conditions">Terms &amp; Conditions</a>
                    <a href="#shipping-returns">Shipping &amp; Returns</a>
                </div>
            </div>
            <p className="copyright">
                &copy; {new Date().getFullYear()} Paridhan. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
