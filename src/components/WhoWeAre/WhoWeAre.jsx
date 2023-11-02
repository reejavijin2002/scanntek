import React, { useState } from 'react';
import '../../components/WhatWeDo/WhatWeAre.css';
import dummyData from '../../services/WhoWeAree';
import Arrow from '../../svg-img/arrow';


const WhoWeAre = () => {
  const [showOverview, setShowOverview] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const toggleOverview = () => {
    setShowOverview(true);
    setShowAboutUs(false);
  };

  const toggleAboutUs = () => {
    setShowOverview(false);
    setShowAboutUs(true);
  };

  const hideAll = () => {
    setShowOverview(false);
    setShowAboutUs(false);
  };

  return (
    <div className="submenu-slide" onMouseLeave={hideAll}>
      <div className="left-child">
        <div className="button-container">
          <div onMouseEnter={toggleOverview} className="overview">
            <button >Overview</button>
            <Arrow />
          </div>
          <div onMouseEnter={toggleAboutUs} className="overview">
            <button >About Us</button>
            <Arrow />
          </div>
        </div>
      </div>
      <div className="right-child">
        {showOverview && (
          <div className="sub-content">
            <div>

              <h2 className="list-bold">
                {dummyData.overview.title}
              </h2>
            </div>
            <div className="sub-right">
              {dummyData.overview.description}
            </div>
          </div>
        )}
        {showAboutUs && (
          <div className="sub-content">
            <div className="sub-right">
              Established in 2023, Scanntek stands at the forefront of IT integration
              solutions. Our commitment revolves around providing sophisticated
              hardware and software solutions designed to suit the needs of
              enterprises, whether they are small or large. With a focus on
              user-friendly, customer-configured approaches, we ensure that businesses
              are well-equipped to excel in the continuously evolving digital realm.
              Experience the Scanntek advantage and elevate your enterprise to new
              horizons.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhoWeAre;
