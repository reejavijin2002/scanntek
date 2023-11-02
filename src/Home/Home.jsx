import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import Slider from '../Slider/Slider';
import { Link } from 'react-router-dom';
import { ArrowRight } from "react-bootstrap-icons";
import Testimonial from '../components/Testimonial/Testimonial';
import servicesData from "../../src/services/Home"
import Testimonials from '../components/Testimonials/Testimoials';
import {featuresData} from "../services/Home"


const Home = () => {





    return (
        <>
            <div className='main-container'>
                <div className='home-banner-container'>
                    <Carousel fade>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="/CarouselImages/slide1.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h1>Consistently delivers business intelligence applications</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src="/CarouselImages/slide2.png"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h1>Offers a comprehensive end to end solution for retailers in all verticals</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/CarouselImages/slide3.png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h1>Integrated approach on problem solving through onsite/offshore global delivery model</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/CarouselImages/slide4.png"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h1>Supply and maintenance of hardware including touch POS machines, CCTV</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className='about-head'><h4>ABOUT US</h4></div>

                <div className='about-description'>
                    <p>Consistently delivers business intelligence applications offers a comprehensive end to end solution for retailers in all verticals
                        integrated approach on problem solving through
                        onsite/offshore global delivery model supply and maintenance of hardware including touch POS  machines,CCTV digital
                        marketing-development of tools as per the coustomer requirement and hosting in different platforms.</p>
                </div>

                <div className='about-feature1'><p>Helps you create a better enterprise reporting system to guide your overall business
                    intelligence strategy and deliver meaningful insights to your employees, customers and partners.</p></div>
                <div className='about-feature2'><p>Tackles the entire spectrum of enterprise functionalities, including finance, assets,
                    field force mobility, human resource, analytics,customer relationship and planning.</p></div>
                <div className='about-feature3'><p>Promote better decision-making across your organization with compelling insightful
                    data dashboards.</p></div>
                <div className='about-feature4'><p>ForzaERP empowers businesses with data analytics tools to turn information into actionable insights.</p> </div>

            </div>

            <div className='product-title'><h4>OUR PRODUCTS</h4></div>

            <div className='product-slider'><Slider /></div>

            <div className='service-container'>
                <div className='service-head'>
                    <h4>OUR SERVICES</h4>
                </div>
                <div className='software'>
                    <Link to="/software" style={{ textDecoration: 'none' }}>
                        <div className='software-text-div'>
                            <p>Software</p>
                            <div className='right-arrow'>
                                <ArrowRight color="#00000" size={80} />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='digital-marketing'>
                    <Link to="/digital" style={{ textDecoration: 'none' }}>
                        <div className='digital-text-div'>
                            <p >Digital marketing</p>
                            <div className='right-arrow'>
                                <ArrowRight color="#00000" size={80} />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='hardware'>
                    <Link to="/hardware" style={{ textDecoration: 'none' }}>
                        <div className='hardware-text-div'>
                            <p>Hardware</p>
                            <div className='right-arrow'>
                                <ArrowRight color="#00000" size={80} />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='web-designing'>
                    <Link to="/web" style={{ textDecoration: 'none' }}>
                        <div className='web-text-div'>
                            <p>Web designing</p>
                            <div className='right-arrow'>
                                <ArrowRight color="#00000" size={80} />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='graphic-designing'>
                    <Link to="/graphic" style={{ textDecoration: 'none' }}>
                        <div className='graphic-text-div'>
                            <p>Graphic designing</p>
                            <div className='right-arrow'>
                                <ArrowRight color="#00000" size={80} />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='networking'>
                    <Link to="/networking" style={{ textDecoration: 'none' }}>
                        <div className='networking-text-div'>
                            <p>Networking</p>
                            <div className='right-arrow'>
                                <ArrowRight color="#00000" size={80} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div  >
                <Testimonials />

            </div>
        </>
    )
}

export default Home
