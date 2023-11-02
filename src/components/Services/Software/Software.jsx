import React, { useEffect } from 'react'
import "./Software.css"
import { Check2 } from 'react-bootstrap-icons'

const Software = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const softwareData = [
        { id: 1, features: "ForzaERP  The ERP Solution for different verticals" },
        { id: 2, features: "SoftPulse  The Hospital Management ERP" },
        { id: 3, features: "Albergo  The Property Management ERP" },
        { id: 4, features: "iRoute  The Complete Route Accounting (Van Sales) software" },
        { id: 5, features: "iChef  The Restaurant Management software" },
        { id: 6, features: "Forza Retail The Point of Sale Management System for Retail Industry" },
        { id: 7, features: "Essato  The Stock Management software" },
    ]

    return (
        <div className='software-main'>
            <div className="card" id="software-banner-card">
                <img src="../../../Services/software.png" className="card-img" alt="software-banner" />
                <div className="card-img-overlay" id='software-overlay'>
                    <h1 className="card-title">SOFTWARE</h1>
                </div>
            </div>
            <div className='soft-ware-features'><SoftwareContainer softwares={softwareData} /></div>
        </div>
    )
}

const Soft = (props) => (
    <div>
        <div id="software-features"> <Check2 /> {props.features}</div>
    </div>
);

const SoftwareContainer = (props) => (
    <div className="software-container" style={{padding:"10px"}} >
        {
            props.softwares.map((soft) => (
                <div  className='software-features-div'><Soft features={soft.features} /></div>
            ))
        }
    </div>
);

export default Software
