import React, { Component } from "react";
import Link from "next/link";

class Content extends Component {
  render() {
    return (
      <section className="contact-info-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-email"></i>
                </div>
                <h3>Mail Here</h3>

                <p>
                  <Link href="#">
                    <a>info@gulfmotorcycles.com</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-google-map"></i>
                </div>
                <h3>We are Here</h3>
                <Link href="https://goo.gl/maps/dk5XGDUJmz2VJU7s5">
                  <a>
                    <p>
                      Gulf Motorcycles,Al Qouz -3, Opposite Al Ahli Driving
                      Centre, MK Ghanim Compound, Unit 45 Dubai, United Arab
                      Emirates
                    </p>{" "}
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-phone"></i>
                </div>
                <h3>Call Here</h3>
                <p>
                  <Link href="#">
                    <a>+971 567 644 951</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
