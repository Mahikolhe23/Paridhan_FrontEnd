import React from 'react';
import Product from './Product';
import './Products.css';
import img1 from '../../images/home1.jpg';
import img2 from '../../images/home2.jpg';
import img3 from '../../images/home3.jpg';
import img4 from '../../images/home4.jpg';
import img5 from '../../images/home5.jpg';
import img6 from '../../images/home6.jpg';
import img7 from '../../images/home7.jpg';
import img8 from '../../images/home8.jpg';
import LargeImage from './LargeImg';

const Products = () => {
    const productsData = [
        {
            id: 1,
            image: img1,
            name: 'Product 1',
            price: 29.99,
            description: 'Product 1 Description',
        },
        {
            id: 2,
            image: img2,
            name: 'Product 2',
            price: 39.99,
            description: 'Product 2 Description',
        },
        {
            id: 3,
            image: img3,
            name: 'Product 3',
            price: 39.99,
            description: 'Product 3 Description',
        },
        {
            id: 4,
            image: img4,
            name: 'Product 4',
            price: 39.99,
            description: 'Product 4 Description',
        },
        {
            id: 5,
            image: img5,
            name: 'Product 5',
            price: 39.99,
            description: 'Product 5 Description',
        },
        {
            id: 6,
            image: img6,
            name: 'Product 6',
            price: 39.99,
            description: 'Product 6 Description',
        },
        {
            id: 7,
            image: img7,
            name: 'Product 7',
            price: 39.99,
            description: 'Product 7 Description',
        },
        {
            id: 8,
            image: img5,
            name: 'Product 8',
            price: 39.99,
            description: 'Product 8 Description',
        }
    ];

    return (
        <section className="products">
            <LargeImage/>
            <h2>Featured Products</h2>
            <div className="product-container">
                {productsData.map((product) => (
                    <Product
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Products;
