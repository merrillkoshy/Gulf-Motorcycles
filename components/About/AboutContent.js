import Link from "next/link";
import React, { Component } from "react";

const AboutContent = () => {
  return (
    <section className="features-area marketing-features ptb-100">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single-holder-box">
                  <img src="/images/Contact_Page_Icons-03.png" alt="image" />
                  <h3>Our Company</h3>
                  <p>
                    Gulf Motorcycles offers a full range of maintenance services
                    to all brands two wheeler delivery motorcyclists put up in
                    the UAE.
                  </p>
                </div>

                <div className="single-holder-box mt-30">
                  <img src="/images/Contact_Page_Icons-01.png" alt="image" />
                  <h3>Pick and Drop</h3>
                  <p>
                    Bringing you the most convenient means to fix your ride, we
                    are offering pick and drop services of your vehicle, in
                    Dubai
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-holder-box mt-50">
                  <img src="/images/Contact_Page_Icons-02.png" alt="image" />
                  <h3>Who we are</h3>
                  <p>
                    Our professionals are trained to manage a wide range of two
                    wheeler’s related services.
                  </p>
                </div>

                <div className="single-holder-box mt-30">
                  <img src="/images/Contact_Page_Icons-04.png" alt="image" />
                  <h3>Contact Us</h3>
                  <p>
                    We are here:
                    <a href="https://goo.gl/maps/dk5XGDUJmz2VJU7s5">
                      Gulf Motorcycles, Al Qouz -3, Opposite Al Ahli Driving
                      Centre, MK Ghanim Compound, Unit 45. Dubai, United Arab
                      Emirates
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="features-holder-content">
              <div className="section-title">
                <h2>Its taken care of!</h2>
                <div className="bar"></div>
                <p>
                  Found by engineers in track racing, Gulf Motorcycles -
                  Motorcycle Repairs was formed to offer the most affordable
                  services to motorcycles of all brands, specialising in
                  delivery bikes.
                </p>
              </div>

              <p>
                Bringing you the best talent with the tools, we are taking our
                services to the next level with picking your vehicle from your
                residence/office and administering the best service methods and
                finally dropping your vehicle back to where we picked it up,
                good as new!
              </p>

              <p>
                As affordability and best prices are our stand-outs, leaving
                your vehicle with us will leave you with your peace of mind and
                most importantly, the peace of ride as we guarantee your vehicle
                will be safer than how it came to us!
              </p>
              {/* <Link href="/services">
                <a className="btn btn-primary">Our Services</a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="about-inner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Our Company</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Who we are</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>What we Value</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Contact Us</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 */}
      <div className="shape7">
        <img src="/images/shape7.png" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/images/cogwheel.svg" alt="img" style={{ opacity: 0.2 }} />
      </div>
      <div className="bg-gray shape-1"></div>
      <div className="shape6">
        <img src="/images/cogwheel.svg" alt="img" style={{ opacity: 0.2 }} />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape8.svg" alt="shape" />
      </div>
      <div className="shape9">
        <img src="/images/shape9.svg" alt="shape" />
      </div>
      <div className="shape10">
        <img src="/images/piston.svg" alt="shape" />
      </div>
      <div className="shape11 rotateme">
        <img src="/images/wrench.svg" alt="shape" style={{ opacity: 0.2 }} />
      </div>
    </section>
  );
};

export default AboutContent;
