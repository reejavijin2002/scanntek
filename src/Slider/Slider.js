import React from 'react'
import "./Slider.css"
import { Link } from 'react-router-dom';

const Slider = () => {
  const cardsData = [
    {
      content:
        "ForzaERP is a TAX enabled Enterprise Resource Planning solution developed with organization's business....",
      imgUrl: "/Home/forza-erp-slide.png",
      btn: "View more",
      link: "/forza-erp",
    },
    {
      content:
        "ForzaRetail offers retail businesses an end-to-end retail management solution to improve overall business....",
      imgUrl: "/Home/forza-retail-slide.png",
      btn: "View more",
      link: "/forza-retail",
    },
    {
      content:
        "iChef Restaurant Management System is a Touch screen based speedy and reliable POS solution for Restaurant....",
      imgUrl: "/Home/ichef-slide.png",
      btn: "View more",
      link: "/i-chef",
    },
    {
      content:
        "Albergo is a global ERP software solution designed for hospitality organizations. The solution goes....",
      imgUrl: "/Home/albergo-slide.png",
      btn: "View more",
      link: "/albergo",
    },
    {
      content:
        "iRoute™ provides a comprehensive, easy-to-use route accounting solution for Direct Store Delivery ....",
      imgUrl: "/Home/iroute-slide.png",
      btn: "View more",
      link: "/i-route",
    },
    {
      content:
        "A system for a hospital would require being very precise and must result in operational cost reduction....",
      imgUrl: "/Home/softplus-slide.png",
      btn: "View more",
      link: "/softpulse",
    },
    {
      content:
        "The system Esatto (Accurate or precise)The Modular Stock Control for Manufacturers, Distributors and....",
      imgUrl: "/Home/esalto-slide.png",
      btn: "View more",
      link: "/esalto",
    },
  ];
      
      return(
        <div className="slider-container">
          <CardContainer cards={ cardsData } />
        </div>
      );
}

const Card = (props) => (
    <div className="card">
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
      <div className="card-content">
        <p>{ props.content }</p>
        <Link style={{textDecoration:"none"}} to={props.link}>
        <div className='btn-div'><div className='btn' >{props.btn}</div></div>
        </Link>
       
      </div>
    </div>
  );
  
  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.content }
            imgUrl={ card.imgUrl }
            link={card.link}
            btn={card.btn} />
        ))
      }
    </div>
  );

export default Slider
