import React, { useEffect } from "react";
import { Check2 } from "react-bootstrap-icons";
import "./Essattoo.css"

const Essatto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const DataLeft = [
    { id: 1, features: "Precise Inventory Management" },
    { id: 2, features: "Flexibility" },
    { id: 3, features: "Integrated Modules" },
    { id: 4, features: "Demand-Driven Replenishment" },
  ];
  const DataRight = [
    { id: 1, features: "Warehouse Efficiency" },
    { id: 2, features: "Customization" },
    { id: 3, features: "Streamlined Operations" },
    { id: 4, features: "Cost Savings" },
  ];
  return (
    <div className="web-main">
      <div className="card" id="esatto-card">
        <img
          src="../../../ProductImages/esalto.png"
          className="card-img opacity-50"
          alt="esatto-banner"
        />
        <div className="card-img-overlay" id="esatto-overlay">
          <h1 className="card-title">ESATTO</h1>
          <p className="card-text text-light d-flex justify-content-center align-items-center p-0 m-0 fw-bold">Modular stock control system</p>
          <div className="esalto-logo-div">
            <div className="esalto-banner-logo">
              <img src="/ProductImages/esalto-logo.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="about-description pt-5">
        <p>
          The system Esatto (Accurate or precise)The Modular Stock Control for Manufacturers, Distributors and Warehousing Operations. Designed to be as flexible as you could possibly want. Esatto has been designed and developed to provide tight integration with the Sales Order Management, Purchase Order Management and Warehouse Management modules so that stock replenishment is performed in line with forecasted demand, stock outs are avoided and warehouse efficiency is maximized.
        </p>
      </div>

      <div className="esatto-feature-container">
        <div className="row m-0">
          <div className="esatto-feature-col1 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center ">
              The system aligns stock replenishment with demand, reducing stockout risk and improving warehouse efficiency
            </p>
          </div>
          <div className="esatto-feature-col2 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
              Purchase order management and demand forecast
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="esatto-feature-col3 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
              precise stock control for manufacturers, distributors, and warehouses, ensuring inventory accuracy
            </p>
          </div>
          <div className="esatto-feature-col4 col-md-6 col-xl-6 col-lg-6 col-xs-6 border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
              adaptable, meeting diverse inventory management needs, making it a versatile choice for businesses
            </p>
          </div>
        </div>
      </div>

      <div className="esattofeatures">
        <div id="esatto-feature-card">
          <h1 className="text-center text-light" id="esattofeatures-title">FEATURES</h1>
          <div className="text-light" id="esatto-features-data">
            <div className="esatto-dataleft">
              <WebDesignContainer webDesign={DataLeft} />
            </div>
            <div className="esatto-dataright">
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
    <div className="esatto-feature">
      <Check2 size={20} /> {props.features}
    </div>
  </div>
);

const WebDesignContainer = (props) => (
  <div className="web-container">
    {props.webDesign.map((WD) => (
      <div className="esatto-features-div">
        <WebDesigning features={WD.features} />
      </div>
    ))}
  </div>
);

export default Essatto;
