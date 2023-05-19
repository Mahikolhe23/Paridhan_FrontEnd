import React from 'react';
import largeImage from '../../images/home8.jpg';
import './LargeImg.css';
const LargeImage = () => {
    return (
        <div className="large-image">
            <img src={largeImage} alt="Large Image" />
        </div>
    );
};

export default LargeImage;
