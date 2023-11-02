import React, { useEffect } from 'react'
import { Check2 } from 'react-bootstrap-icons'
import "./Graphic.css"

const Graphic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const graphicData = [
    { id: 1, features: "Brochure designing" },
    { id: 2, features: "Logo designing" },
    { id: 3, features: "Social media poster designing" },
    { id: 4, features: "Business cards" },
    { id: 5, features: "Flyer" },
    { id: 6, features: "Banners" },
    { id: 7, features: "package design" },
    { id: 7, features: "Advertisements" },
    { id: 7, features: "Branding"},
]
  return (
    <div className='graphic-main'>
            <div className="card">
                <img src="../../../Services/graphic.Fpng" className="card-img" alt="software-banner" />
                <div className="card-img-overlay">
                    <h1 className="card-title">GRAPHIC DESIGNING</h1>
                </div>
            </div>
           <div className='features'><GraphicContainer graphics = {graphicData} /></div>
    </div>
  )
}

const GraphicDesign = (props) => (
  <div className="graphic-features">
      <div className='feature'> <Check2/>    {props.features}</div>
  </div>
);

const GraphicContainer = (props) => (
  <div className="graphic-container">
      {
          props.graphics.map((GD) => (
             <div className='graphic-features-div'><GraphicDesign features={GD.features} /></div> 
          ))
      }
  </div>
);


export default Graphic
