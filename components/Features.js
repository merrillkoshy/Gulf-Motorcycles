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
										<a>
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
					<details>
						<summary>Explore our Services</summary>
						<p className="accordion-content">
							Oil Change • Full Engine Work • Half Engine Work • Clutch Cable
							Changing • Break Light Bulb & Changing • Indicator Bulb Changing •
							Throttle Cable Changing • Air Filter Element & Changing •
							Carburator Cleaning • BreakShoe Changing • Clutch Plates Changing
							• Front Shock Seal Oil & Changing • Headlight Bulb & Changing •
							Chain Sprocket Kit Changing • Spark Plug Chaining • Delivery Box
							Lock Changing • Speedo Meter Cable Changing • Bike Washing • Front
							Brake Pad Changing • Side Stand Changing • Major Service • Minor
							Service • Tyre Replacement • Pick up • Puncture Repair with Tube •
							Puncture Repair and Fitting w/o Tube • New Battery Charging •
							Cylinder head Repairing/De Carbonising • Chain Adjustment • Clutch
							Adjustment • Head Light Adjustment • Brake Adjustment • Sound
							Check up • GPS/Mobile Case Fitting • Free General Checkup • Engine
							Vibration Checkup • Wiring Harness Assembly change • Chain
							Cleaning • Wheel Rim Change • Fender front changing • Fender
							Changing • Caliper Assembly Repairing • Holder Handle Changing •
							Lock set Changing • Fairing change Pulsar 220 • Fairing change •
							Fuel Tank/Gauge Fuel change/Repairing • Meter Assembly Pulsar 220
							Change • Meter Assembly Change • Headlight/Bulb Changing Pulsar
							220 • Saree Guard Assembly Fitting • Mirror Holder Change • Holder
							step rear change • Frame Assembly Change • Silencer Assembly
							Change • Oil Cooler assembly Change/cleaning • Lever comp. Gear
							shifter/ spring changing • Disc Change • Centrifugal oil filter
							cleaning • Balancer Idler Gear Adjustment/ change • Clutch Lever
							change • Tail Lamp Assembly Change • Tail Lamp Bulb Change • Major
							kit change/ Repairing • Handle Bar changing • Other Minor repair •
							Pick up & Drop • Field Tyre Puncture Tubeless • Tyre change •
							Welding job • inspecting failed parts • quotation • Engine Oil
							change • Major service • Minor Service • Accidental Repair • Minor
							Service RS 200 • Major Service RS 200 • Minor Service Dominar 400
							• Major Service Dominar 400 • Half engine Work RS/Dominar • Full
							Engine work RS/DOMinar • Printing & branding bike • RTA & CID
							approval cost • Breakdown Recovery - Dubai • welding Silencer •
							Welding Chassis • Chassis number Punching • Wheel Alignment • Fork
							Alignment • Chassis Alignment
						</p>
					</details>
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
                  <img src="/images/features-img1.png" alt="Gulf Motorcycle Repairs Dubai" />
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
