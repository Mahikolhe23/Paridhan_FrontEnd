import cat1 from '../../../images/home1.jpg';
import cat2 from '../../../images/home2.jpg';
import cat3 from '../../../images/home3.jpg';
import cat4 from '../../../images/home4.jpg';
import "./Category.scss";
const Category = () => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat1} alt="" />
                </div>
                <div className="category">
                    <img src={cat2} alt="" />
                </div>
                <div className="category">
                    <img src={cat3} alt="" />
                </div>
                <div className="category">
                    <img src={cat4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;
