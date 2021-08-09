import React, { Component, useEffect, useState } from "react";
import firebase from "../../lib/firebaseConfig";
import CTA from "./CTA";

const ServiceContent = () => {
	const services = [
		"Oil Change ",
		" Full Engine Work ",
		" Half Engine Work ",
		" Clutch Cable Changing ",
		" Break Light Bulb & Changing ",
		" Indicator Bulb Changing ",
		" Throttle Cable Changing ",
		" Air Filter Element & Changing ",
		" Carburator Cleaning ",
		" Breakshoe Changing ",
		" Clutch Plates Changing ",
		" Front Shock Seal Oil & Changing ",
		" Headlight Bulb & Changing ",
		" Chain Sprocket Kit Changing ",
		" Spark Plug Chaining ",
		" Delivery Box Lock Changing ",
		" Speedo Meter Cable Changing ",
		" Bike Washing ",
		" Front Brake Pad Changing ",
		" Side Stand Changing ",
		" Tyre Replacement ",
		" Bike Pick up ",
		" Puncture Repair with Tube ",
		" Puncture Repair and Fitting w/o Tube ",
		" New Battery Charging ",
		" Cylinder head Repairing/De Carbonising ",
		" Chain Adjustment ",
		" Clutch Adjustment ",
		" Head Light Adjustment ",
		" Brake Adjustment ",
		" Sound Check up ",
		" GPS/Mobile Case Fitting ",
		" Free General Checkup ",
		" Engine Vibration Checkup ",
		" Wiring Harness Assembly change ",
		" Chain Cleaning ",
		" Wheel Rim Change ",
		" Fender front changing ",
		" Fender Changing ",
		" Caliper Assembly Repairing ",
		" Holder Handle Changing ",
		" Lock set Changing ",
		" Fairing change Pulsar 220 ",
		" Fairing change ",
		" Fuel Tank/Gauge Fuel change/Repairing ",
		" Meter Assembly Pulsar 220 Change ",
		" Meter Assembly Change ",
		" Headlight/Bulb Changing Pulsar 220 ",
		" Saree Guard Assembly Fitting ",
		" Mirror Holder Change ",
		" Holder step rear change ",
		" Frame Assembly Change ",
		" Silencer Assembly Change ",
		" Oil Cooler assembly Change/cleaning ",
		" Lever comp. Gear shifter/ spring changing ",
		" Disc Change ",
		" Centrifugal oil filter cleaning ",
		" Balancer Idler Gear Adjustment/ change ",
		" Clutch Lever change ",
		" Tail Lamp Assembly Change ",
		" Tail Lamp Bulb Change ",
		" Major kit change/ Repairing ",
		" Handle Bar changing ",
		" Pick up & Drop ",
		" Field Tyre Puncture Tubeless ",
		" Tyre change ",
		" Welding job ",
		" Inspecting failed parts ",
		" Engine Oil change ",
		" Major service ",
		" Minor Service ",
		" Accidental Repair ",
		" Minor Service RS 200 ",
		" Major Service RS 200 ",
		" Minor Service Dominar 400 ",
		" Major Service Dominar 400 ",
		" Half engine Work RS/Dominar ",
		" Full Engine work RS/DOMinar ",
		" Printing & branding bike ",
		" RTA & CID approval cost ",
		" Breakdown Recovery - Dubai ",
		" Welding Silencer ",
		" Welding Chassis ",
		" Chassis number Punching ",
		" Wheel Alignment ",
		" Fork Alignment ",
		" Chassis Alignment",
	];
	// var servicesRef = firebase.database().ref("/services");
	// const [services, setServices] = useState([]);
	// const servicesList = () => {
	// 	var serviceList = [];

	// 	servicesRef
	// 		.once("value", (snapshot) => {
	// 			snapshot.forEach((snap) => {
	// 				const svObject = snap.val();
	// 				if (svObject.published) {
	// 					serviceList.push(svObject);
	// 				}
	// 			});
	// 		})
	// 		.then(() => {
	// 			setServices(serviceList);
	// 		});
	// };
	useEffect(() => {
		// servicesList();
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
							return <CTA serviceName={service} />;
						})}
				</div>
			</div>
		</section>
	);
};

export default ServiceContent;
