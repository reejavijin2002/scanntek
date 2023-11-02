import React, { useEffect } from "react";
import { Check2 } from "react-bootstrap-icons";
import "./Forzaretail.css"

const Forzaretail = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DataLeft = [
    { id: 1, features: "Touch-screen Point Of Sale Module" },
    { id: 2, features: "Multi-mode & On-Account Payment Support" },
    { id: 3, features: "Centralized Multi-location Management" },
    { id: 4, features: "Integrated PDT enabled Stock Movement" },
    { id: 5, features: "Customizable Loyalty Programs Management" },
    { id: 6, features: "Automated Backup system Recovery" },
    { id: 7, features: "User Privilege Secured for Fraud Prevention" },
    { id: 8, features: "Real time Stock and Sales Updates" },
    { id: 9, features: "User Customizable Reports" },
  ];
  const DataRight = [
    { id: 1, features: "Multiple Currencies payment Support" },
    { id: 2, features: "Bilingual Receipt printing" },
    { id: 3, features: "Built-in Barcode and Label Printing" },
    { id: 4, features: "User defined Cost Management -FOC, FIFO, LIFO etc.." },
    { id: 5, features: "User defined Promotion schemes"},
    { id: 6, features: "Supports B2B & B2C transactions" },
    { id: 7, features: "VAT Integrated Accounting" },
    { id: 8, features: "SMS & Email Push Notification"},
  ];
  return (
    <div className="web-main">
      <div className="card forza-retail-card">
        <img
          src="../../../ProductImages/forzaretail.png"
          className="card-img opacity-50"
          alt="forza-retail-banner"
        />
        <div className="card-img-overlay" id="forzaretail-overlay">
          <h1 className="card-title">FROZA RETAIL</h1>
          <p className="card-text text-light d-flex justify-content-center align-items-center p-0 m-0 fw-bold">The Complete Retail Sales Management Software</p>
          <div className="forzaretail-logo-div">
            <div className="forzaretail-banner-logo">
              <img src="/ProductImages/forzaretail.logo.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="product-description pt-5">
        <p>
        ForzaRetail offers retail businesses an end-to-end retail management solution to improve overall business performance through educated and accurate decision making. It brings all the retail aspects of operations together and provides a 360 degree view of business.</p>
        <p>This comprehensive, fully integrated solution has built in flexibility to offer single- or multi-terminal and single- or multi-site capability. Real-time integration and reporting allows business managers to make quick and informed decisions, as all critical business information is instantly accessible.</p>
      <p>With full integration into various other key retail management functions, ForzaRetail provides a comprehensive, proven and reliable solution to any retail business that want’s to grow and boost sales.
        </p>
      </div>

      <div className="forzaretail-feature-container">
        <div className="row m-0">
          <div className="forzaretail-feature-col1 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center ">
            Tracks and manage inventory
            </p>
          </div>
          <div className=" forzaretail-feature-col2 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Close cashier shifts quickly accurately
            </p>
          </div>
        </div>
        <div className=" row w-100 m-0">
          <div className="forzaretail-feature-col3 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center ">
            Track item movement, supplier & customer histories 
            </p>
          </div>
          <div className="forzaretail-feature-col4 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Preview, search,print daily sales reports
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="forzaretail-feature-col5 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center ">
            Evaluate operations and financial status
            </p>
          </div>
          <div className="forzaretail-feature-col6 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            Identify sales trends in every department or category
            </p>
          </div>
        </div>
      </div>

      <div className="forzaretailfeatures">
        <div id="forzaretail-feature-card">
            <h1 className="text-center text-light" id="forzaretailfeatures-title">FEATURES</h1>
            <div className="text-light" id="forzaretail-features-data">
              <div className="forzaretail-dataleft">
              <WebDesignContainer webDesign={DataLeft} />
              </div>
              <div className="forzaretail-dataright">
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
    <div className="forzaretail-feature">
      <Check2  size={20}/>{props.features}
    </div>
  </div>
);

const WebDesignContainer = (props) => (
  <div className="web-container">
    {props.webDesign.map((WD) => (
      <div className="forzaretail-features-div">
       <p> <WebDesigning features={WD.features} /></p>
      </div>
    ))}
  </div>
);

export default Forzaretail;
