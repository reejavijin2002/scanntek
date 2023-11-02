import React, { useEffect } from "react";
import { Check2 } from "react-bootstrap-icons";
import "./Albergo.css"

const Albergo = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DataLeft = [
    { id: 1, features: "Easy Check-In / Check-out" },
    { id: 2, features: "Quick room selection" },
    { id: 3, features: "Reservation and settlement with a single click" },
    { id: 4, features: "Reservations of other hotel facilities" },
    { id: 5, features: "Integration with own Internet Booking Engine" },
    { id: 6, features: "Multiple Service point of sale (POS), and more" },
  ];
  const DataRight = [
    { id: 1, features: "Demonstrative colored Room Tape Chart Dashboard" },
    { id: 2, features: "Flexible early check-in & late check-out adjustments" },
    { id: 3, features: "Restaurant and Convenient store POS modules" },
    { id: 4, features: "Integrated telephone call accounting system" },
    { id: 5, features: "Guest history, MIS reports, SMS Facility" },
  ];
  return (
    <div className="web-main">
      <div className="card" id="albergo-card">
        <img
          src="../../../ProductImages/albergo.png"
          className="card-img opacity-50"
          alt="albergo-banner"
        />
        <div className="card-img-overlay" id="albergo-overlay">
          <h1 className="card-title">ALBERGO</h1>
          <p className="card-text text-light d-flex justify-content-center align-items-center p-0 m-0 fw-bold">Hotel Management ERP</p>
          <div className="albergo-logo-div">
            <div className="albergo-banner-logo">
              <img src="/ProductImages/albergo-logo.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="product-description pt-5">
        <p>
        Albergo is a global ERP software solution designed for hospitality organizations. The solution goes beyond traditional ERP to provide financial management, business intelligence, and more. It provides managers with a new hotel system including an environment for optimizing all business processes applying to single and multi-properties operations. For booking, finance, front desk, housekeeping, room service, food and beverage, all daily tasks are performed within one user interface with no need for data transfer between departments.
        </p>
      </div>

      <div className="albergo-feature-container">
        <div className="row m-0">
          <div className="albergo-feature-col1 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center ">
            Designed for hotels, Motels, Resorts and apartments
            </p>
          </div>
          <div className="albergo-feature-col2 col-md-6 col-xl-6 col-lg-6 col-xs-6   border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Quick room selection y the room type
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="albergo-feature-col3 col-md-6 col-xl-6 col-lg-6 col-xs-6 border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Reservation and settlement in one click
            </p>
          </div>
          <div className="albergo-feature-col4 col-md-6 col-xl-6 col-lg-6 col-xs-6   border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Guests history, MIS reports, SMS facility
            </p>
          </div>
        </div>
      </div>

      <div className="albergofeatures">
        <div id="albergo-feature-card">
            <h1 className="text-center text-light" id="albergofeatures-title">FEATURES</h1>
            <div className="text-light" id="albergo-features-data">
              <div className="albergo-dataleft">
              <WebDesignContainer webDesign={DataLeft} />
              </div>
              <div className="albergo-dataright">
              <WebDesignContainer webDesign={DataRight} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const WebDesigning = (props) => (
  <div className="web-features">
    <div className="albergo-feature">
      <Check2 size={20} />{props.features}
    </div>
  </div>
);

const WebDesignContainer = (props) => (
  <div className="web-container">
    {props.webDesign.map((WD) => (
      <div className="albergo-features-div">
        <WebDesigning features={WD.features} />
      </div>
    ))}
  </div>
);

export default Albergo;
