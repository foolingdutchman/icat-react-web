/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import sliderBg1 from "../images/home/slider/hill.png";
import sliderBg2 from "../images/home/slider/house.png";
import sliderBg3 from "../images/home/slider/sun.png";
import sliderBg4 from "../images/home/slider/birds1.png";
import sliderBg5 from "../images/home/slider/birds2.png";

function HomeSlider() {
  return (
    <>
      <section id="home-slider">
        <div className="container">
          <div className="row">
            <div className="main-slider">
              <div className="slide-text">
                <h1>GET YOUR ICAT!</h1>
                <p>
                  ICAT is a pet development game, which service deployed on
                  internet computer Network. Each cat is a NFT asset which is
                  store on blockchain and will never be stolen.
                </p>
                <a href="#subscribe" className="btn btn-common">
                  SIGN UP
                </a>
              </div>
              <img src={sliderBg1} className="slider-hill" alt="slider image" />
              <img
                src={sliderBg2}
                className="slider-house"
                alt="slider image"
              />
              <img src={sliderBg3} className="slider-sun" alt="slider image" />
              <img
                src={sliderBg4}
                className="slider-birds1"
                alt="slider image"
              />
              <img
                src={sliderBg5}
                className="slider-birds2"
                alt="slider image"
              />
            </div>
          </div>
        </div>
        <div className="preloader">
          <i className="fa fa-sun-o fa-spin"></i>
        </div>
      </section>
    </>
  );
}

export default HomeSlider;
