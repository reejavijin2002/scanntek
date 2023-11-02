import React, { useEffect } from "react";
import { Check2 } from "react-bootstrap-icons";
import "./Forzaerp.css"
const Forzaerp = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


const DataLeft = [
    { id: 1, features: "Cloud Ready ERP" },
    { id: 2, features: "User Customizable Reports" },
    { id: 3, features: "Unified Data And Real-time Insights" },
    { id: 4, features: "Automated Backup System Recovery" },
    { id: 5, features: "Fast Core Financials And A Connected Ecosystem" },
    { id: 6, features: "Real Time Stock Inventory Control" },
    { id: 7, features: "Integrated Management Of Fixed Assets" },
  ];
 const DataRight = [
    { id: 1, features: "VAT Integrated Accounting" },
    { id: 2, features: "Centralized Multi-location Management" },
    { id: 3, features: "User Privilege Secured For Fraud Prevention" },
    { id: 4, features: "Streamlined Reconciliation Of Bank Statements" },
    { id: 5, features: "Powerful Reporting And Analytics For Business Planning" },
    { id: 6, features: "Integrated Management Of Fixed Assets" },
  ];
  return (
    <div className="web-main">
      <div className="card" id="forzaerp-card">
        <img
          src="../../../ProductImages/forzaerp.png"
          className="card-img"
          alt="forzaerp-banner"
        />
        <div className="card-img-overlay" id="forzaerp-overlay">
          <h1 className="card-title">FORZA ERP</h1>
          <div className="forzaerp-logo-div">
            <div className="forzaerp-banner-logo">
              <img src="/ProductImages/forzaerp-logo.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="product-description pt-5">
        <p>
        ForzaERP is a TAX enabled Enterprise Resource Planning solution developed with organization's business process in mind. This advanced and customizable ERP solution empowers synchronization of all aspects of business, share data, drive performance, cut costs, and maximize profitability.</p>
<p>ForzaERP tackles the entire spectrum of enterprise functionalities, including finance, supply chain, assets, field force mobility, analytics, human resources, customer relations, and planning. This Full-fledged Enterprise solution can be customized according to the nature and organizational structure of the company.</p>
<p>With ForzaERP Solution, turn massive data into insights, keep workforce productive and get things done quickly. It helps to automate core processes, monitor key performance indicators, and efficiently coordinate business activities. Start with what is needed now, then add additional features as business grows.
        </p>
      </div>

      <div className="forzaerp-feature-container">
        <div className="row m-0">
          <div className="forzaerp-feature-col1 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm  border rounded-4 border-light justify-content-center d-flex align-items-center">
            <p className="text-center">
              Helps you create a better enterprise reporting system to guide
              your overall business intelligence strategy and deliver meaningful
              insights to your employees, customers and partners
            </p>
          </div>
          <div className="forzaerp-feature-col2 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
              Tackles the entire spectrum of enterprise functionalities,
              including finance, assets, field force mobility, human resource,
              analytics,customer relationship and planning
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="forzaerp-feature-col3 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
              Promote better decision-making across your organization with
              compelling insightful data dashboards
            </p>
          </div>
          <div className="forzaerp-feature-col4 col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
              ForzaERP empowers businesses with data analytics tools to turn
              information into actionable insights
            </p>
          </div>
        </div>
      </div>

      <div className="forzaerpfeatures">
        <div id="forzaerp-feature-card">
            <h1 className="text-center text-light" id="forzaerpfeatures-title">FEATURES</h1>
            <div className="text-light" id="forzaerp-features-data">
              <div className="forzaerp-dataleft">
              <WebDesignContainer webDesign={DataLeft} />
              </div>
              <div className="forzaerp-dataright">
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
    <div className="forza-erp-feature">
      <Check2  size={20}/> {props.features}
    </div>
  </div>
);

const WebDesignContainer = (props) => (
  <div className="web-container">
    {props.webDesign.map((WD) => (
      <div className="forzaerp-features-div">
       <p> <WebDesigning features={WD.features} /></p>
      </div>
    ))}
  </div>
);

export default Forzaerp;
