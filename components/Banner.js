import React, { Component } from "react";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="main-banner app-home">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                  <h1>Repairs & Rental Services Across UAE !</h1>
                  <p>
                    At Gulf Motorcycles, we offer a reliable motorcycle repair
                    services for customers in UAE. Call us today for a friendly
                    chat about your bike.
                  </p>
                  <div className="badgings">
                    <Button>Call Now</Button>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="app-image">
                  <img src="/images/MastHeader-01.png" alt="image" />
                  {/* <img src="/images/app-screen1.png" alt="image" /> */}
                </div>
              </div>
            </div>
            {/* After App release */}
            {/* <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                  <h1>Service Bookings Made Easy !</h1>
                  <p>
                    Download our app from App Store or PlayStore and enjoy easy
                    booking of your motorcycle services including Pick-and-Drop
                    of your vehicle !
                  </p>
                  <div className="badgings">
                    <img src="/images/AppStoreBadge.png" alt="image" />
                    <img src="/images/PlayStoreBadge.png" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="app-image">
                  <img src="/images/app-screen2.png" alt="image" />
                  <img src="/images/app-screen1.png" alt="image" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="creative-shape">
        <img src="/images/coglines.png" alt="bg" />
      </div>
      <div className="shape1">
        <img src="/images/cogwheel.svg" alt="img" style={{ opacity: 0.2 }} />
      </div>
      <div className="shape2">
        <img src="/images/bike.svg" alt="img" />
      </div>
      <div className="shape3">
        <img src="/images/cogwheel.svg" alt="img" style={{ opacity: 0.2 }} />
      </div>

      <div className="shape8 rotateme">
        <img src="/images/tire.svg" alt="shape" />
      </div>
      <div className="shape9">
        <img src="/images/engine.svg" alt="shape" style={{ width: "100px" }} />
      </div>
      {/* <div className="bg-gray shape-1"></div>
      <div className="shape1">
        <img src="/images/shape1.png" alt="img" />
      </div>
      <div className="shape2">
        <img src="/images/shape2.png" alt="img" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.png" alt="img" />
      </div>
      <div className="shape4 rotateme">
        <img src="/images/shape4.png" alt="img" />
      </div>
      <div className="shape6">
        <img src="/images/shape6.png" alt="img" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape8.svg" alt="shape" />
      </div>
      <div className="shape9">
        <img src="/images/shape9.svg" alt="shape" />
      </div> */}
    </div>
  );
};

export default Banner;
