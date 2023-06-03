import "./Product.scss";
import prod from '../../../images/home6.jpg';
const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377;499</span>
            </div>
        </div>
    );
};

export default Product;
