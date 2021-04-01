import React, { Component } from "react";

class Discover extends Component {
  render() {
    return (
      <section className="book-discover pb-100">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="discover-content">
                <h3>Services Overview</h3>
                <p>
                  Gulf Motorcycles offers a full range of maintenance services
                  to all brands two wheeler delivery motorcyclists put up in the
                  UAE.
                </p>
                <p>
                  Our professionals are trained to manage a wide range of two
                  wheeler’s related services.
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
                    <i className="icofont-check"></i> Air Filters
                  </li>
                  <li>
                    <i className="icofont-check"></i> Pick & Drop
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="discover-img">
                <img src="/images/landing-page-bike.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Discover;
