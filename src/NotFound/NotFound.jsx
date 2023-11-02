import React, { useEffect } from 'react'
import "./NotFound.css"
import logo from "../../src/images/logo.png"
const NotFound = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="not-found">
            <h3>404 - Not Found </h3>
            <p>Sorry, the page you are looking for does not exist.</p>
            <img src={logo} alt="Page Not Found" style={{height:"20px" , width:"100px"}}/>
        </div>
    )
}

export default NotFound
