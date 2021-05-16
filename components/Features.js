import React, { useState, useEffect } from "react";
import firebase from "../lib/firebaseConfig";

const Features = () => {
  const [services, setServices] = useState([]);
  var servicesRef = firebase.database().ref("/mainServices");

  const servicesList = () => {
    var serviceList = [];

    servicesRef
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const svObject = snap.val();

          serviceList.push(svObject);
        });
      })
      .then(() => {
        setServices(serviceList);
      });
  };

  useEffect(() => {
    servicesList();
  }, []);
  return (
    <section className="features-area book-features ptb-100">
      <div className="container">
        <div className="row">
          {services &&
            services.map((service, i) => {
              return (
                <div key={`serve${i}`} className="col-lg-4 col-md-6">
                  <div className="single-features-box">
                    <div className="icon">
                      <img
                        alt={service?.serviceName}
                        src={service?.icon}
                        width="500px"
                        height="500px"
                      />
                    </div>
                    <h3 style={{ textTransform: "capitalize" }}>
                      {service?.serviceName}
                    </h3>
                    <div className="discover-content">
                      <span>{service?.description}</span>
                    </div>
                    {/* <ul>
                      {service?.services.map((service, i) => {
                        return (
                          <li key={service?.itemName}>{service?.itemName}</li>
                        );
                      })}
                    </ul> */}
                    <a href="#">
                      <strong>Service cost</strong> : AED {service?.salesPrice}
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="features-inner-area">
        <div className="container">
          *Cost of parts and labor are charged separately
        </div>
        {/* <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="features-inner-content">
                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-win-trophy"></i>
                    </div>
                    <h3>More than 5+ award achived</h3>
                    <p>
                      Plan ahead by day, week, or month, and see project status
                      at a glance. Search and filter to focus in on anything
                      form a single project to an individual person's workload.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-responsive"></i>
                    </div>
                    <h3>Read On Any Device</h3>
                    <p>
                      Plan ahead by day, week, or month, and see project status
                      at a glance. Search and filter to focus in on anything
                      form a single project to an individual person's workload.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-verification-check"></i>
                    </div>
                    <h3>Very high resolution (4K)</h3>
                    <p>
                      Plan ahead by day, week, or month, and see project status
                      at a glance. Search and filter to focus in on anything
                      form a single project to an individual person's workload.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="features-image">
                  <img src="/images/features-img1.png" alt="image" />
                </div>
              </div>
            </div>
          </div> */}
      </div>

      {/* <div className="shape7">
          <img src="/images/shape7.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="img" />
        </div>
        <div className="bg-gray shape-1"></div>
        <div className="shape6">
          <img src="/images/shape6.png" alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape8.svg" alt="shape" />
        </div>
        <div className="shape9">
          <img src="/images/shape9.svg" alt="shape" />
        </div>
        <div className="shape10">
          <img src="/images/shape10.svg" alt="shape" />
        </div>
        <div className="shape11 rotateme">
          <img src="/images/shape11.svg" alt="shape" />
        </div> */}
    </section>
  );
};

export default Features;
