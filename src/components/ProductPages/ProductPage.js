import React from "react";
import { useLocation } from "react-router-dom";
import { Check2 } from "react-bootstrap-icons";
import "./ProductPage.css"

const ProductPage = () => {
  const cardTitle = [
    {
      "/forza-retail": "FORZA RETAIL",
      "/forza-erp": "FORZA ERP",
      "/i-chef": "I CHEF",
      "/i-route": "I ROUTE",
      "/essatto": "ESSATTO",
      "/albergo": "ALBERGO",
      "/soft-pulse": "SOFT PULSE",
    },
  ];

  const DataLeft = [
    {
      "/forza-retail": [
        { id: 1, features: "Touch-screen Point Of Sale Module" },
        { id: 2, features: "Multi-mode & On-Account Payment Support" },
        { id: 3, features: "Centralized Multi-location Management" },
        { id: 4, features: "Integrated PDT enabled Stock Movement" },
        { id: 5, features: "Customizable Loyalty Programs Management" },
        { id: 6, features: "Automated Backup system Recovery" },
        { id: 7, features: "User Privilege Secured for Fraud Prevention" },
        { id: 8, features: "Real time Stock and Sales Updates" },
        { id: 9, features: "User Customizable Reports" },
      ],
    },
    {
      "/forza-erp": [
        { id: 1, features: "Cloud Ready ERP" },
        { id: 2, features: "User Customizable Reports" },
        { id: 3, features: "Unified Data And Real-time Insights" },
        { id: 4, features: "Automated Backup System Recovery" },
        { id: 5, features: "Fast Core Financials And A Connected Ecosystem" },
        { id: 6, features: "Real Time Stock Inventory Control" },
        { id: 7, features: "Integrated Management Of Fixed Assets" },
      ],
    },
    {
        "/i-chef": [
          { id: 1, features: "Content layout 123" },
          { id: 2, features: "SEO friendly code and layout 123" },
          { id: 3, features: "Dynamic & Responsive Website 123" },
          { id: 4, features: "Repairing tools and custom repair features 123" },
          { id: 5, features: "Promotion & discount tools 123" },
          { id: 6, features: "Integration blog 123" },
          { id: 7, features: "Content layout 123" },
          { id: 8, features: "SEO friendly code and layout 123" },
          { id: 9, features: "Dynamic & Responsive Website 123" },
        ],
      },
  ];

  const DataRight = [
    {
      "/forza-retail": [
        { id: 1, features: "Multiple Currencies payment Support" },
        { id: 2, features: "Bilingual Receipt printing" },
        { id: 3, features: "Built-in Barcode and Label Printing" },
        { id: 4, features: "User defined Cost Management -FOC, FIFO, LIFO etc.." },
        { id: 5, features: "User defined Promotion schemes" },
        { id: 6, features: "Supports B2B & B2C transactions" },
        { id: 7, features: "VAT Integrated Accounting" },
        { id: 8, features: "SMS & Email Push Notification" },
      ],
    },
    {
      "/forza-erp": [
        { id: 1, features: "Vat Integrated Accounting" },
        { id: 2, features: "Centralized Multi-location Management" },
        { id: 3, features: "User Privilege Secured For Fraud Prevention" },
        { id: 4, features: "Streamlined Reconciliation Of Bank Statements" },
        { id: 5, features: "Powerful Reporting And Analytics For Business Planning" },
        { id: 6, features: "Integrated Management Of Fixed Assets" },
      ],
    },
    {
        "/i-chef": [
          { id: 1, features: "Content layout 123" },
          { id: 2, features: "SEO friendly code and layout 123" },
          { id: 3, features: "Dynamic & Responsive Website 123" },
          { id: 4, features: "Repairing tools and custom repair features 123" },
          { id: 5, features: "Promotion & discount tools 123" },
          { id: 6, features: "Integration blog 123" },
          { id: 7, features: "Content layout 123" },
          { id: 8, features: "SEO friendly code and layout 123" },
          { id: 9, features: "Dynamic & Responsive Website 123" },
        ],
      },
  ];

  const { pathname } = useLocation();
  debugger;
  const title = cardTitle.find((item) => item[pathname])[pathname];
  const leftData = DataLeft.find((item) => item[pathname])[pathname];
  const rightData = DataRight.find((item) => item[pathname])[
    pathname
  ];

  return (
    <div className="web-main">
      <div className="card">
        <img
          src="../../../ProductImages/forzaretail.png"
          className="card-img"
          alt="web-designing-banner"
        />
        <div className="card-img-overlay">
          <h1 className="card-title">{title}</h1>
        </div>
      </div>

      <div className="about-description pt-5">
        <p>
        ForzaRetail offers retail businesses an end-to-end retail management solution to improve overall business performance through educated and accurate decision making. It brings all the retail aspects of operations together and provides a 360 degree view of business.
This comprehensive, fully integrated solution has built in flexibility to offer single- or multi-terminal and single- or multi-site capability. Real-time integration and reporting allows business managers to make quick and informed decisions, as all critical business information is instantly accessible.
With full integration into various other key retail management functions, ForzaRetail provides a comprehensive, proven and reliable solution to any retail business that want’s to grow and boost sales.
        </p>
      </div>

      <div className="pt-5 mx-5 px-5">
        <div className="row m-0">
          <div className="col-md-6 p-0  rounded-border d-flex align-items-center">
            <p className="text-center mx-5 px-5">
            Tracks and manage inventory</p>
          </div>
          <div className="col-md-6 p-0 p-0 rounded-border d-flex align-items-center">
            <p className="text-center mx-5 px-5">
            Close cashier shifts quickly accurately
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="col-md-6 p-0 rounded-border d-flex align-items-center">
            <p className="text-center mx-5 px-5">
            Track item movement, supplier & customer histories 
            </p>
          </div>
          <div className="col-md-6 p-0 rounded-border d-flex align-items-center">
            <p className="text-center mx-5 px-5">
            Preview, search,print daily sales reports
            </p>
          </div>
        </div>

        <div className="row w-100 m-0">
          <div className="col-md-6 p-0 rounded-border d-flex align-items-center">
            <p className="text-center mx-5 px-5">
            Evaluate operations and financial status
            </p>
          </div>
          <div className="col-md-6 p-0 rounded-border d-flex align-items-center">
            <p className="text-center mx-5 px-5">
            Identify sales trends in every department or category
            </p>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="card">
          <img
            src="../../../ProductImages/forza-retail-feature-banner.png"
            className="card-img opacity-25"
            alt="web-designing-banner"
          />
          <div className="card-img-overlay">
            <h1 className="text-center">FEATURES</h1>
            <div className="d-flex justify-content-evenly mt-5 pt-5">
              <WebDesignContainer webDesign={leftData} />
              <WebDesignContainer webDesign={rightData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WebDesigning = (props) => (
  <div className="web-features">
    <div className="feature">
      <Check2 /> {props.features}
    </div>
  </div>
);

const WebDesignContainer = (props) => (
  <div className="web-container">
    {props.webDesign.map((WD) => (
      <div className="web-features-div">
        <WebDesigning features={WD.features} />
      </div>
    ))}
  </div>
);

export default ProductPage;
