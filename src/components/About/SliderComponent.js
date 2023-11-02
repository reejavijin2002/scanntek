import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css"

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay:true,
      cssEase: "linear",
      arrows:false,
      responsive: [
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="/About/logo-slider1.png"/>
          </div>
          <div>
          <img src="/About/logo-slider2.png"/>
          </div>
          <div>
          <img src="/About/logo-slider3.png"/>
          </div>
          <div>
          <img src="/About/logo-slider4.png"/>
          </div>
          <div>
          <img src="/About/logo-slider5.png"/>
          </div>
          <div>
          <img src="/About/logo-slider6.png"/>
          </div>
          <div>
          <img src="/About/logo-slider7.png"/>
          </div>
        </Slider>
      </div>
    );
  }
}