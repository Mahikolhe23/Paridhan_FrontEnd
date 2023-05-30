import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';
import "./Footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Paridhan Platform can be the greatest blessing for the customer’s everyday
                        needs of fashion products.With this platform customer can register and order their
                        needs and  assured delivery at the desire time every day at their doorstep.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Paridhan, Sky Heights, Pisoli kondhawa pune
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone : 7350458043
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email : mkolhe23@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Men</span>
                    <span className="text">Women</span>
                    <span className="text">Kids</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Calculator</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Contact Us</span>
                    <span className="text">Term & Conditions</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        PARIDHAN 2023 CREATED BY MAHENDRA KOLHE.
                        PREMIUM E-COMMERCE SOLUTIONS.
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};
export default Footer;