import React, { Component } from "react";

class Discover extends Component {
  render() {
    return (
      <section className="book-discover ptb-100">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="discover-content">
                <h3>Services Overview</h3>
                <span>Sub</span>
                <p>An intro</p>

                <ul>
                  <li>
                    <i className="icofont-check"></i> Point 1
                  </li>
                  <li>
                    <i className="icofont-check"></i> Point 2
                  </li>
                  <li>
                    <i className="icofont-check"></i> Point 3
                  </li>
                  <li>
                    <i className="icofont-check"></i> Point 4
                  </li>
                  <li>
                    <i className="icofont-check"></i> Point 5
                  </li>
                  <li>
                    <i className="icofont-check"></i> Point 6
                  </li>
                  <li>
                    <i className="icofont-check"></i> Point 7
                  </li>
                  <li>
                    <i className="icofont-check"></i> Point 8
                  </li>
                  <li>
                    <i className="icofont-check"></i> Point 9
                  </li>
                  <li>
                    <i className="icofont-check"></i> Point 10
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
