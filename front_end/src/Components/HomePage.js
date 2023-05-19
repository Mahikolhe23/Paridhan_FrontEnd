import React from 'react';
import './HomePage.css';
import Header from './Header';
import Footer from './Footer';
import Products from './Content/Products';

const HomePage = () => {
    return (
        <div className="container">
            <Header />

            <Products />

            <Footer />
        </div>
    );
};

export default HomePage;
