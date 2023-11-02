import React from 'react'
import "./About.css"
import SliderComponent from './SliderComponent'

const About = () => {
    return (
        <div>
            <div className='about-container'>
                <div className='about-banner'>
                    <div className="card ">
                        <img src="../../../About/about-banner.png" className="card-img" alt="software-banner" />
                        <div className="card-img-overlay">
                            <h1 className="card-title">SCANNTEK</h1>
                        </div>
                    </div>
                </div>

                <div className='about-description1'><p>Scanntek IT solutions LLP was established in 2022 as a startup registered and incorporated under companies act. This startup is intended to develop digital marketing tools to comply with the new trends in commercial corridor integrating social media marketing, development of websites, graphic design and android applications. And also to identify the talented job seekers, provide them required training and make them professionals to compete in the emerging digital world.</p></div>
                <div className='about-description2'><p>The structure of Scanntek IT solutions LLP is designed in such way that it has a strong marketing strategy and the required work force to install and support software. Suitable for all commercial business requirements such as POS solution software, ERP systems, Property management software, Route sales solutions (van sales), Hospital management software for clinics, Management solutions for educational institutions, Digital marketing applications design and supply required hardware to customers providing strong field support either onsite or offshore.</p></div>

                <SliderComponent />
            </div>

        </div>
    )
}

export default About
