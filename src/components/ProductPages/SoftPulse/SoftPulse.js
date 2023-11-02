import React, { useEffect } from "react";
import { Check2 } from "react-bootstrap-icons";
import "./SoftPulse.css"

const Softpulse = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DataLeft = [
    { id: 1, features: "Appointment scheduling" },
    { id: 2, features: "Registration/Admission" },
    { id: 3, features: "Doctors Workbench" },
    { id: 4, features: "Nursing Workbench" },
    { id: 5, features: "Operation Theater (OT) Management" },
    { id: 6, features: "Ward Management" },
    { id: 7, features: "Electronic Medical Records Management(EMR)" },
    { id: 8, features: "Inventory Management" },
    { id: 9, features: "Purchasing management " },
    { id: 10, features: "OPD, IPD"},
  ];
  const DataRight = [
    { id: 1, features: "Finance Management" },
    { id: 2, features: "Payroll Management" },
    { id: 3, features: "Human Resource Management System" },
    { id: 4, features: "Dietary (Food & Beverage) Management" },
    { id: 5, features: "Housekeeping/Laundry Management" },
    { id: 6, features: "Insurance and Contracts Management"},
    { id: 7, features: "Management Information System (MIS)"},
    { id: 8, features: "Database Management" },
    { id: 9, features: "Equipment Maintenance System (EMS)"},
  ];
  return (
    <div className="web-main">
      <div className="card" id="softpulse-card">
        <img
          src="../../../ProductImages/softpulse.png"
          className="card-img opacity-50"
          alt="soft-pulse-banner"
        />
        <div className="card-img-overlay" id="softpulse-overlay">
          <h1 className="card-title">SOFT PULSE</h1>
          <div className="softpulse-logo-div">
            <div className="softpulse-banner-logo">
              <img src="/ProductImages/softpulse-logo.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="product-description pt-5">
        <p>
        A system for a hospital would require being very precise and must result in operational cost reduction, process improvement and efficient management. SoftPulse is an ERP suite of software modules developed to be a solution which is very accurate in its approach suits all environments including large, medium or small hospitals. SoftPulse is a revolutionary solution with end to end features for simplifying hospital management – all at a cost which provides the fastest ROI. It runs on all standard windows hardware platforms and can be easily customized to suit the requirements and reflect the priorities of a hospital management team.
        </p>
      </div>

      <div className="albergo-feature-container">
        <div className="row m-0">
          <div className="softpulse-feature-col1 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex  justify-content-center align-items-center">
            <p className="text-center ">
            cost-effective solution that delivers a quick return on investment (ROI) for hospitals
            </p>
          </div>
          <div className="softpulse-feature-col2 col-md-6 col-xl-6 col-lg-6 col-xs-6 border rounded-4 border-light d-flex  justify-content-center align-items-center">
            <p className="text-center">
            An integrated module to automate and streamline hospital operations in large and medium-scale facilities
            </p>
          </div>
        </div>
        <div className="row w-100 m-0">
          <div className="softpulse-feature-col3 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center">
            A revolutionary solution with end to end features for hospital manageement
            </p>
          </div>
          <div className="softpulse-feature-col4 col-md-6 col-xl-6 col-lg-6 col-xs-6  border rounded-4 border-light d-flex justify-content-center align-items-center">
            <p className="text-center ">
            Highly versatile, quickly installable, completely database driven
            </p>
          </div>
        </div>
      </div>

      <div className="softpulsefeatures">
        <div id="softpulse-feature-card">
            <h1 className="text-center text-light" id="softpulsefeatures-title">FEATURES</h1>
            <div className="text-light" id="softpulse-features-data">
              <div className="softpulse-dataleft">
              <WebDesignContainer webDesign={DataLeft} />
              </div>
              <div className="softpulse-dataright">
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
    <div className="softpulse-feature">
      <Check2 size={20}/> {props.features}
    </div>
  </div>
);

const WebDesignContainer = (props) => (
  <div className="web-container">
    {props.webDesign.map((WD) => (
      <div className="softpulse-features-div">
        <WebDesigning features={WD.features} />
      </div>
    ))}
  </div>
);

export default Softpulse;
