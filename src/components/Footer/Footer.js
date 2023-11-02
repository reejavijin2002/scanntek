/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { useState } from "react";
import {
    EmojiFrown,
    EmojiNeutral,
    EmojiSmile,
    EmojiSmileFill,
    EmojiNeutralFill,
    EmojiFrownFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const showEmoji1 = () =>{
        setIsActive(true);
        setIsActive2(false);
        setIsActive3(false);
    }

    const showEmoji2 = () =>{
        setIsActive2(true)
        setIsActive(false);
        setIsActive3(false);
    }

    const showEmoji3 =() =>{
        setIsActive(false);
        setIsActive2(false);
        setIsActive3(true);
    }

    const showAllFalse =() =>{
        setIsActive(false)
        setIsActive2(false);
        setIsActive3(false);
    }
    return (
        <>
            <div className="footer-section">
                <div className="footer-container">
                    <div className="footer-about">
                        <div className="footer-headings">
                            <p>About</p>
                        </div>
                        <ul>
                            <li>
                                <Link to="/about">About us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-products">
                        <div className="footer-headings">
                            <p>Products</p>
                        </div>
                        <ul>
                            <li>
                                <Link to="/forza-erp">ERP</Link>
                            </li>
                            <li>
                                <Link to="/i-route">Field Sales Automation</Link>
                            </li>
                            <li>
                                <Link to="/i-chef">Restaurants POS</Link>
                            </li>
                            <li>
                                <Link to="/forza-retail">Retail ERP</Link>
                            </li>
                            <li>
                                <Link to="/esalto">Modular Stock Control System</Link>
                            </li>
                            <li>
                                <Link to="/softpulse">Hospital Management ERP</Link>
                            </li>
                            <li>
                                <Link to="/albergo">Hotel Management ERP</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-hardware">
                        <div className="footer-headings">
                            <p>Hardware</p>
                        </div>
                        <ul>
                            <li>
                                <Link to="/terminal">All-in-one terminals</Link>
                            </li>
                            <li>
                                <Link to="#">Barcode scanners</Link>
                            </li>
                            <li>
                                <Link to="#">Cash drawers</Link>
                            </li>
                            <li>
                                <Link to="#">Mobile post or tablets</Link>
                            </li>
                            <li>
                                <Link to="#">Receipt printers</Link>
                            </li>
                            <li>
                                <Link to="#">Mobile printers </Link>
                            </li>
                            <li>
                                <Link to="#">Other hardware</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-software">
                        <div className="footer-headings">
                            <p>Service</p>
                        </div>
                        <ul>
                            <li>
                                <Link to="/software">Software</Link>
                            </li>
                            <li>
                                <Link to="/digital">Digital marketing</Link>
                            </li>
                            <li>
                                <Link to="/hardware">Hardware</Link>
                            </li>
                            <li>
                                <Link to="/web">Web designing</Link>
                            </li>
                            <li>
                                <Link to="/graphic">Graphic designing</Link>
                            </li>
                            <li>
                                <Link to="/network">Networking</Link>
                            </li>
                            
                        </ul>
                    </div>


                    <div className="footer-connect">
                        <div className="footer-headings">
                            <p>Connect</p>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">Facebook</Link>
                            </li>
                            <li>
                                <Link to="#">Twitter</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-more">
                        <div className="footer-headings">
                            <p>More</p>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">Clients</Link>
                            </li>
                            <li>
                                <Link to="#">Careers</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-feedback">
                        <div className="feedback-head">How was your experience</div>
                        <div className="feedback-expressions">
                            <div>
                                {isActive ? (
                                    <EmojiSmileFill
                                        onClick={showAllFalse}
                                     size={25}
                                    />
                                ) : (
                                    <EmojiSmile
                                        onClick={showEmoji1} size={25}
                                    />
                                )}
                            </div>

                            <div>
                                {isActive2 ? (
                                    <EmojiNeutralFill
                                    onClick={showAllFalse} size={25}
                                    />
                                ) : (
                                    <EmojiNeutral
                                    onClick={showEmoji2} size={25}
                                    />
                                )}
                            </div>

                            <div>
                                {isActive3 ? (
                                    <EmojiFrownFill
                                    onClick={showAllFalse}  size={25}
                                    />
                                ) : (
                                    <EmojiFrown
                                    onClick={showEmoji3} size={25}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-end">
                    <div className="footer-logo">
                        <img src="/Home/logo.png" alt="" />
                        <div>
                            <p>IT Solutions</p>
                        </div>
                    </div>
                    <div className="footer-address">
                        <p>2nd floor, Kedhar Tower Puthiyapalam,</p>
                        <p>
                            <span>Calicut, Pin 673002</span>
                        </p>
                        <p>
                            <span>Phone: +91 9072700085</span>
                        </p>
                    </div>
                    <div className="footer-privacy">
                        <p>© 2023 Scanntek IT Solution. All rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
