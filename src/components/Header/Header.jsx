import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import WhatWeAre from "../WhatWeDo/WhatWeAre";
import { fetchHeaderData } from "../../services/Header";
import Contactsvg from "../../svg-img/contactsvg";

const Header = () => {
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);
  let closeTimeout;
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    fetchHeaderData()
      .then((data) => setHeaderData(data))
      .catch((error) => console.error('Error fetching header data:', error));
  }, []);

  const handleMouseEnterWhoWeAre = () => {
    clearTimeout(closeTimeout);
    setShowWhoWeAre(true);
    setShowWhatWeDo(false);
  };

  const handleMouseonclick=()=>{
    setShowWhoWeAre(false);
    setShowWhatWeDo(false);


  }

  const handleMouseEnterWhatWeDo = () => {
    clearTimeout(closeTimeout);
    setShowWhatWeDo(true);
    setShowWhoWeAre(false);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setShowWhoWeAre(false);
      setShowWhatWeDo(false);
    }, 500);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="./">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <Link to="./About" style={{textDecoration:"none" , color:"#fff" }}>

        <div className="inner_division" onClick={handleMouseonclick}>
        

          <div className="navbar-links">
            <div
              onMouseEnter={handleMouseEnterWhoWeAre}
              onMouseLeave={handleMouseLeave}
            >
              <h4 >Who we are</h4>
         
            </div>
            <div
              onMouseEnter={handleMouseEnterWhatWeDo}
              onMouseLeave={handleMouseLeave}
            >
              <h4>What we do</h4>
            </div>
            <h4>Blog</h4>
          
        </div>
        </div>
        </Link>

        <div>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <div className="contact-button">Contact Us</div>
            <div className="new-small-button">
             <Contactsvg/>


            </div>
          </Link>
        </div>
      </nav>
      <div onMouseEnter={handleMouseEnterWhoWeAre} onMouseLeave={handleMouseLeave}>
        {showWhoWeAre && <WhoWeAre />}
      </div>
      <div onMouseEnter={handleMouseEnterWhatWeDo} onMouseLeave={handleMouseLeave}>
        {showWhatWeDo && <WhatWeAre />}
      </div>
    </div>
  );
};

export default Header;
