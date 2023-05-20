import React from 'react';
import './HomePage.css';
import Header from './Header';
import Footer from './Footer';
import Products from './Content/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactPage from './Contact';

const HomePage = () => {
    return (
        <div className="container">
            <Router>
                <Header />

                <Products />

                <Routes>
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>

                <Footer />
            </Router>

        </div>
    );
};

export default HomePage;
