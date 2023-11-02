import React, { useEffect } from 'react'
import { Check2 } from 'react-bootstrap-icons'
import "./Hardware.css"

const Hardware = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const softwareData = [
    { id: 1, features: "Touch POS system" },
    { id: 2, features: "Thermal receipt printer" },
    { id: 3, features: "Barcode printer" },
    { id: 4, features: "Desktop PC" },
    { id: 5, features: "Laser printer" },
    { id: 6, features: "Barcode scanner" },
    { id: 7, features: "Cash drawer" },
    { id: 8, features: "Weighing scale machine" },
    { id: 9, features: "Thermal paper roll" },
    { id: 10, features: "Barcode label" },
    { id: 11, features: "Android device" },
    { id: 12, features: "Retail billing machine" },
]
  return (
    <div className='hardware-main'>
    <div className="card" id="hardware-banner-card">
        <img src="../../../Services/hardware.png" className="card-img" alt="software-banner" />
        <div className="card-img-overlay">
            <h1 className="card-title">HARDWARE</h1>
        </div>
    </div>
   <div className='features'><SoftwareContainer softwares={softwareData} /></div>
</div>
  )
}

const Soft = (props) => (
  <div className="hardware-features">
      <div className='feature'> <Check2/>    {props.features}</div>
  </div>
);

const SoftwareContainer = (props) => (
  <div className="hardware-container">
      {
          props.softwares.map((soft) => (
             <div className='hardware-features-div'><Soft features={soft.features} /></div> 
          ))
      }
  </div>
);

export default Hardware
