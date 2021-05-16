import React, { Component } from "react";

class Discover extends Component {
  render() {
    return (
      <section className="book-discover pb-100">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="discover-content">
                <h2>Services Overview</h2>

                <p>
                  Gulf Motorcycles offers a full range of maintenance services
                  to all brands two wheeler delivery motorcyclists put up in the
                  UAE.
                </p>
                <p>
                  Our professionals are trained to manage all brands of
                  motorcycles and are experts at UAE's favorite delivery bikes
                  such as Bajaj Pulsar and Honda Unicorn.
                </p>

                <ul>
                  <li>
                    <i className="icofont-check"></i> Engine Work
                  </li>
                  <li>
                    <i className="icofont-check"></i> Branding & Painting
                  </li>
                  <li>
                    <i className="icofont-check"></i> Body & Lights
                  </li>
                  <li>
                    <i className="icofont-check"></i> Tyres
                  </li>
                  <li>
                    <i className="icofont-check"></i> Bike Wash
                  </li>
                  <li>
                    <i className="icofont-check"></i> Oil Change
                  </li>
                  <li>
                    <i className="icofont-check"></i> Air Filters
                  </li>
                  <li>
                    <i className="icofont-check"></i> Leasing & Renting
                  </li>
                  <li>
                    <i className="icofont-check"></i> Motorcycle Parts
                  </li>
                  <li>
                    <i className="icofont-check"></i> Pick & Drop
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="discover-img">
                <img
                  loading="lazy"
                  src="/images/landing-page-bike.png"
                  alt="image"
                  width="2000px"
                  height="2000px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Discover;
