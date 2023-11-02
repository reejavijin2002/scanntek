import React, { useEffect } from 'react'
import "./Web.css"
import { Check2 } from 'react-bootstrap-icons'


const Web = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const webDesignData = [
    { id: 1, features: "Content layout" },
    { id: 2, features: "SEO friendly code and layout" },
    { id: 3, features: "Dynamic & Responsive Website" },
    { id: 4, features: "Repairing Tools and Custom Repair Features" },
    { id: 5, features: "Promotion & discount tools" },
    { id: 6, features: "Integration blog" },
]
  return (
    <div className='web-main'>
            <div className="card" id="web-banner-card">
                <img src="../../../Services/web.png" className="card-img" alt="web-designing-banner" />
                <div className="card-img-overlay" id="webdesign-overlay">
                    <h1 className="card-title">WEB DESIGNING</h1>
                </div>
            </div>
           <div className="web-design-feature"><WebDesignContainer webDesign={webDesignData} /></div>
        </div>
  )
}

const WebDesigning = (props) => (
  <div>
      <div  id='webdesign-features'> <Check2 size={15}/>    {props.features}</div>
  </div>
);

const WebDesignContainer = (props) => (
  <div className="web-container">
      {
          props.webDesign.map((WD) => (
             <div className='web-features-div'><WebDesigning features={WD.features} /></div> 
          ))
      }
  </div>
);

export default Web
