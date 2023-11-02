import React from 'react'
import "./Testimonial.css"


const Slider = () => {
  const cardsData = [
    {
      client: "Neha",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide1.png",

    },
    {
      client: "Rahul",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide2.png",

    },
    {
      client: "Ananya",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide3.png",

    },
    {
      client: "Ananya",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide3.png",

    },
    {
      client: "Ananya",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide3.png",

    },
    {
      client: "John",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide4.png",

    },
    {
      client: "John",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide4.png",

    },
    {
      client: "John",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide4.png",

    },
    {
      client: "John",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide4.png",

    },
    {
      client: "John",
      content: "This is how people think and feel about our product and services",
      imgUrl: "/test-slide4.png",

    },
    {
      client: "John",
      content: "This is how people thinks and feel about our product and services",
      imgUrl: "/test-slide4.png",

    },
    {
      client: "John",
      content: "This is how people thinks and feel about our product and services",
      imgUrl: "/test-slide4.png",

    },

  ];

  return (

    
    <div className='test-container'>
      <div className='test-row row' id="test-row">
        <div className='test-col1' id="test-col1">
          <div className="testimonial-head">Testimonials</div>
          <div className="this-is-how"><p >This is how people think
            and feel about our product
            and services</p></div>
        </div>
        <div className='test-col2' id="test-col2">
          <div className="testimonial-container">
            <CardContainer cards={cardsData} />
          </div>
        </div>
      </div>

    </div>

  );
}

const Card = (props) => (
  <div className="card" id='testimonial-card'>
    <img src={props.imgUrl}
      alt={props.alt || 'Image'} className='card-img-top' />
    <div className='card-body'>
      <div className='card-title' id='client-name'>{props.client}</div>
      <div className="card-text" id='card-content'>
        <p>{props.content}</p>
      </div>
    </div>

  </div>
);

const CardContainer = (props) => (
  <div className="testimonial-cards-container">
    {
      props.cards.map((card) => (
        <Card
          client={card.client}
          content={card.content}
          imgUrl={card.imgUrl}
        />
      ))
    }
  </div>
);

export default Slider
