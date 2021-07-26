import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <section className="page-title-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>

        <div className="shape1">
          <img src="/images/cogwheel.svg" alt="img" className="floaters" />
        </div>
        <div className="shape2">
          <img src="/images/bike.svg" alt="img" />
        </div>
        <div className="shape3">
          <img src="/images/cogwheel.svg" alt="img" className="floaters" />
        </div>

        <div className="shape8 rotateme">
          <img src="/images/tire.svg" alt="shape" />
        </div>
        <div className="shape9">
          <img
            src="/images/engine.svg"
            alt="shape"
            style={{ width: "100px" }}
          />
        </div>
      </section>
    );
  }
}

export default Banner;
