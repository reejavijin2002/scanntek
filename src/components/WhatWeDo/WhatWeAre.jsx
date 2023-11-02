import React, { useState } from "react";
// import "./WhatWeAre.css";
import dummyData from "../../services/WhatWeDo";
import Arrow from "../../svg-img/arrow";

const WhatWeAre = () => {
  const [showOverview, setShowOverview] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showService, setShowService] = useState(false);

  const toggleOverview = () => {
    setShowOverview(true);
    setShowAboutUs(false);
    setShowService(false);
  };

  const toggleAboutUs = () => {
    setShowOverview(false);
    setShowAboutUs(true);
    setShowService(false);
  };

  const toggleService = () => {
    setShowOverview(false);
    setShowAboutUs(false);
    setShowService(true);
  };

  const hideAll = () => {
    setShowOverview(false);
    setShowAboutUs(false);
    setShowService(false);
  };

  return (
    <div className="submenu-slide" onMouseLeave={hideAll}>
      <div className="left-child">
        <div className="button-container">
          <div onMouseEnter={toggleOverview} className="overview">
            <button >Overview</button>
            <Arrow/>
          </div>
          <div onMouseEnter={toggleAboutUs} className="overview">
            <button>Industries</button>
            <Arrow/>
          </div>
          <div onMouseEnter={toggleService} className="overview">
            <button >Services</button>
            <Arrow />
          </div>
        </div>
      </div>
      <div className="right-child">
        {showOverview && (
          <div className="sub-content" style={{ }} >
            <h2 className="list-bold sub-right" style={{marginBottom:"24px"}} >
              {dummyData?.overview?.title}
            </h2>
            <div className="sub-right">
              {dummyData?.overview?.description}
            </div>
          </div>
        )}
        {showAboutUs && (
          <div className="sub-content">
            <div className="sub-right">
              <div style={{ listStyle: "none" }} className="button-container">
                <li>Restaurant </li>
                <li> Retail </li>
                <li>Health Care </li>
                <li>Banking </li>
                <li>Food and Beverage </li>
              </div>
            </div>
          </div>
        )}
        {showService && (
          <div className="sub-content">
            <div className="sub-right">
              <div style={{ listStyle: "none" }} className="button-container">
                <li>Web Designing </li>
                <li> Graphic Designing </li>
                <li>Software </li>
                <li>Hardware </li>
                <li>Digital Marketing</li>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeAre;
