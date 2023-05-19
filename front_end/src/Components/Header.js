import React from 'react';
import './Header.css';
import home1 from '../images/home1.jpg';
import home2 from '../images/home2.jpg';
import home3 from '../images/home3.jpg';
const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">Paridhan</div>
                <ul className="nav-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
            <div className="content">
                <h1>Welcome to Paridhan</h1>
                
            </div>
        </div>
    );
};

export default Header;
