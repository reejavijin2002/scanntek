import React, { useEffect } from "react";
import { Check2 } from "react-bootstrap-icons";
import "./IChef.css"

const Ichef = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const DataLeft = [
    { id: 1, features: "Touch-screen & User friendly interface" },
    { id: 2, features: "Tablet-friendly Order Taking System" },
    { id: 3, features: "Multiple levels of Items pricing" },
    { id: 4, features: "Kitchen Display System" },
    { id: 5, features: "Built-in Staff Time & Attendance" },
    { id: 6, features: "Home/Outdoor Delivery Tracking Made Easy" },
    { id: 7, features: "Outdoor Food Catering & Banquet/Party Order Operations" },
    { id: 8, features: "Integrated Telephone call Management" },
    { id: 9, features: "Centrally Managed Multi Branch Support" },
    { id: 10, features: "Integrated Cashier Point" },
  ];
  const DataRight = [
    { id: 1, features: "VAT Enabled Multi-mode Payment Solutions" },
    { id: 2, features: "Full Menu Customization & Table Layout" },
    { id: 3, features: "Customer Order History" },
    { id: 4, features: "User Privilege Secured for Fraud Prevention" },
    { id: 5, features: "Multiple Cash Counters Support" },
    { id: 6, features: "Multi-language support" },
    { id: 7, features: "Table & Reservation Management" },
    { id: 8, features: "Back Office & Inventory Management" },
    { id: 9, features: "Multiple Payment Methods" },
    { id: 10, features: "SMS & Email Push Notification" },
  ];
  return (
    <div className="web-main">
      <div className="card " id="ichef-card">
        <img
          src="../../../ProductImages/ichef.png"
          className="card-img opacity-50"
          alt="i-chef-banner"
        />
        <div className="card-img-overlay" id="ichef-overlay">
          <h1 className="card-title">I CHEF</h1>
          <p className="card-text text-light d-flex justify-content-center align-items-center p-0 m-0 fw-bold">The Complete Restaurant Management Software</p>
          <div className="ichef-logo-div">
            <div className="ichef-banner-logo">
              <img src="/ProductImages/ichef-logo.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="product-description pt-5">
        <p>
        iChef Restaurant Management System is a Touch screen based speedy and reliable POS solution for Restaurant management, designed to give restaurants all the tools it requires to speed up service and increase efficiency of operations. It encompasses all aspects of operations including billing, table ordering, table layout & guest seating, inventory tracking, recipe management, accounting-commerce integration and so on.It's innovative and break-through technology enables Touch Pad (tablets and smart phones) order taking manage Kitchen Information Display and invoicing process in a systematic way.</p>
        <p>With iChef get centralized control over all the connected branches or franchises with command over menu items, rates, partial control over stock and inventory management of individual locations and more.
        </p>
      </div>

      <div className="ichef-feature-container">
        <div className="row m-0">
          <div className="ichef-feature-col1 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm p-4 border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Printer KOT & Touch enabled kitchen delivery system
            </p>
          </div>
          <div className="ichef-feature-col2 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            100% Touch screen layout & guest seating
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="ichef-feature-col3 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Email notification for end of day reports & SMS integration
            </p>
          </div>
          <div className="ichef-feature-col4 col-md-6 col-xl-6 col-lg-6 col-xs-6   border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Multiple discount options including inline and on sub-total
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="ichef-feature-col5 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center ">
            User configurable table layout & guest seating
            </p>
          </div>
          <div className="ichef-feature-col6 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center ">
            Telephone integration for customer delivery management
            </p>
          </div>
        </div>
      </div>

      <div className="icheffeatures">
        <div id="ichef-feature-card">
            <h1 className="text-center text-light" id="icheffeatures-title">FEATURES</h1>
            <div className="text-light" id="ichef-features-data">
              <div className="ichef-dataleft">
              <WebDesignContainer webDesign={DataLeft} />
              </div>
              <div className="ichef-dataright">
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
    <div className="ichef-feature">
      <Check2 size={20} /> {props.features}
    </div>
  </div>
);

const WebDesignContainer = (props) => (
  <div className="web-container">
    {props.webDesign.map((WD) => (
      <div className="ichef-features-div">
        <WebDesigning features={WD.features} />
      </div>
    ))}
  </div>
);

export default Ichef;
