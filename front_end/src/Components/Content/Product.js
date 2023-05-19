import React from 'react';
import './Product.css';
const Product = ({ image, name, price, description }) => {
    return (
        <div className="product-card">
            <img src={image} alt="Product" className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">${price}</p>
                <p className="product-description">{description}</p>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
