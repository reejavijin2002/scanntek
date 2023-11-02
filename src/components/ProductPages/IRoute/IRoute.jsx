import React, { useEffect } from "react";
import { Check2 } from "react-bootstrap-icons";
import "./IRoute.css"

const Iroute = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DataLeft = [
    { id: 1, features: "Monitor Sales, Inventory, Accounting and Route Reconciliation Information in Real-time ." },
    { id: 2, features: "Merchandising, Surveys and Data Collection at Customer Premises" },
    { id: 3, features: "Digital Signature Capture and Onsite Payment Collection Records" },
    { id: 4, features: "Scalability/Maintainability of the Solution Across Branches" },
    { id: 5, features: "Complete Traceability of Documents (invoices, receipts and credit notes) Generated from the System" },
  ];
  const DataRight = [
    { id: 1, features: "Route Planning & Mapping" },
    { id: 2, features: "Pre-Sales and Direct Sales Off-truck Invoicing Track Mobile Inventory" },
    { id: 3, features: "Mobile Portable Printing & Integrated Barcode Scanning" },
    { id: 4, features: "Remote Inventory Management and Stock Return Tracking." },
    { id: 5, features: "Cloud Computing Enabled Real-time Pre Sell and Delivery Applications" },
    { id: 6, features: "Integration Utility to Standard Back Office Accounts and Inventory Management Systems" },
  ];
  return (
    <div className="web-main">
      <div className="card" id="iroute-card">
        <img
          src="../../../ProductImages/iroute.png"
          className="card-img opacity-75"
          alt="i-route-banner"
        />
        <div className="card-img-overlay" id="iroute-overlay">
          <h1 className="card-title">I ROUTE</h1>
          <p className="card-text text-light d-flex justify-content-center align-items-center p-0 m-0 fw-bold">The Complete van Sales Management Software</p>
          <div className="iroute-logo-div">
            <div className="iroute-banner-logo">
              <img src="/ProductImages/iroute-logo.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="product-description pt-5">
        <p>
        iRoute™ provides a comprehensive, easy-to-use route accounting solution for Direct Store Delivery (DSD), Van Sales, Consumer-Goods Delivery (CGD) and FMCG sector companies in the Middle East with a focuses on automation of Field Service Agent activity and data consolidation of transactions. It is designed to maximize sales performance, realize greater profits and dynamically manage inventory. With iRoute , organizations are able to optimize all aspects of the business including administration, sales, mobility, delivery, order management, pricing, promotions, route settlement, invoicing, collections and more.</p>
        <p>iRoute can be used as a standalone solution or seamlessly integrated with existing ERP, accounting and other business operational systems. iRoute has been developed with over the years incorporating local industry best practices . The services-oriented architecture of iRoute and use of Internet Standard Interfaces enables efficient system configuration based on specific environment.
        </p>
      </div>

      <div className="iroute-feature-container">
        <div className="row m-0">
          <div className="iroute-feature-col1 col-md-6 col-xl-6 col-lg-6 col-xs-6 border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Distribution and direct store delivery
            </p>
          </div>
          <div className="iroute-feature-col2 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Enhanced route management, route optimization and detailed reporting
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="iroute-feature-col3 col-md-6 col-xl-6 col-lg-6 col-xs-6 border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Cloud computing enabled real-time pre-sell and invoice application
            </p>
          </div>
          <div className="iroute-feature-col4 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Van inventory management
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="iroute-feature-col5 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Route plan and customer visit sequence management
            </p>
          </div>
          <div className="iroute-feature-col6 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Integrated back office and inventory management system
            </p>
          </div>
        </div>
      </div>

      <div className="iroutefeatures">
        <div id="iroute-feature-card">
            <h1 className="text-center text-light" id="iroutefeatures-title">FEATURES</h1>
            <div className="text-light" id="iroute-features-data">
              <div className="iroute-dataleft">
              <WebDesignContainer webDesign={DataLeft} />
              </div>
              <div className="iroute-dataright">
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
    <div className="iroute-feature">
      <Check2 size={25}/>{props.features}
    </div>
  </div>
);

const WebDesignContainer = (props) => (
  <div className="web-container">
    {props.webDesign.map((WD) => (
      <div className="iroute-features-div">
        <WebDesigning features={WD.features} />
      </div>
    ))}
  </div>
);

export default Iroute;
