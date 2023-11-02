import React, { useEffect } from 'react'
import { Check2 } from 'react-bootstrap-icons'
import "./Digital.css"

const Digital= () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const digitalData = [
        { id: 1, feature: "Ad creatives. Google Ads & Meta Ads" },
        { id: 2, feature: "Website designing" },
        { id: 3, feature: "Search engine optimization (SEO)" },
        { id: 4, feature: "Social media marketing (SMM)" },
        { id: 5, feature: "Email marketing" },
    ]
  return (
    <div className='digital-main'>
            <div className="card">
                <img src="../../../Services/digital-marketing.png" className="card-img" alt="digital-banner" />
                <div className="card-img-overlay">
                    <h1 className="card-title">DIGITAL MARKETING</h1>
                </div>
            </div>
           <div className='features'><DigitalContainer digitals= {digitalData} /></div>
     </div>
  )
}

const DigiMarketing = (props) => (
    <div className="digital-features">
        <div className='feature'> <Check2/>    {props.features}</div>
    </div>
);

const DigitalContainer = (props) => (
    <div className="digital-container">
        {
            props.digitals.map((digit) => (
               <div className='digital-features-div'><DigiMarketing features={digit.feature} /></div> 
            ))
        }
    </div>
);

export default Digital
