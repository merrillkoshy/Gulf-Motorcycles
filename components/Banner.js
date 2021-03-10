import React, { Component } from "react";

const Banner = () => {
  return (
    <div className="main-banner app-home">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                  <h1>Service Bookings Made Easy !</h1>
                  <p>
                    Download our app from App Store or PlayStore and enjoy easy
                    booking of your motorcycle services including Pick-and-Drop
                    of your vehicle !
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="app-image">
                  <img src="/images/app-img4.png" alt="image" />
                  <img src="/images/app-img2.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="creative-shape">
        <img src="/images/coglines.png" alt="bg" />
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
