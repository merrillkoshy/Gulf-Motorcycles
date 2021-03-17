import React, { Component, useEffect, useState } from "react";
import firebase from "../../lib/firebaseConfig";

const ServiceContent = () => {
  var servicesRef = firebase.database().ref("/services");
  const [services, setServices] = useState([]);
  const servicesList = () => {
    var serviceList = [];

    servicesRef
      .once("value", (snapshot) => {
        snapshot.forEach((snap) => {
          const svObject = snap.val();
          if (svObject.published) {
            serviceList.push(svObject);
          }
        });
      })
      .then(() => {
        setServices(serviceList);
      });
  };
  useEffect(() => {
    servicesList();
    return () => {
      //
    };
  }, []);
  return (
    <section className="services-area ptb-100">
      <div className="container">
        <div className="row">
          {services &&
            services.map((service) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="single-services">
                    <div className="icon">
                      <i className="icofont-wrench"></i>
                    </div>
                    <h3>{service.itemName}</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>

                    {service.discount > 0 ? (
                      <>
                        <div className="row">
                          <div className="col">
                            <a>Service Cost</a>
                          </div>
                          <div style={{ textDecoration: "line-through" }}>
                            AED {service.mrp}
                          </div>
                          <div className="col">AED {service.salesPrice}</div>
                        </div>
                        <span className={`badge badge-success`}>
                          {" "}
                          {(service.discount / service.mrp) * 100}% off
                        </span>
                      </>
                    ) : (
                      <div className="row">
                        <div className="col">
                          <a>Service Cost</a>
                        </div>
                        <div className="col">AED {service.salesPrice}</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
