import React, { Component } from "react";
import Link from "next/link";

const Content = () => {
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
								<Link href="mailto:info@gulfmotorcycles.com">
									<a>info@gulfmotorcycles.com</a>
								</Link>
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="contact-info-box">
							<Link href="https://g.page/gulfMotorcycles">
								<div
									className="icon"
									style={{
										cursor: "pointer",
									}}
								>
									<i className="icofont-google-map"></i>
								</div>
							</Link>
							<h3>We are Here</h3>
							<Link href="https://g.page/gulfMotorcycles">
								<a>
									<address itemScope itemType="http://schema.org/PostalAddress">
										<span itemProp="streetAddress">
											Gulf Motorcycles, Opposite Al Ahli Driving Centre, MK
											Ghanim Compound
										</span>
										,
										<br />
										<span itemProp="addressLocality">Al Qouz -3</span>,{" "}
										<span itemProp="addressRegion">Dubai</span>,{" "}
										<span itemProp="addressCountry">United Arab Emirates</span>
									</address>
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
									<a>+971 5 6764 4951</a>
								</Link>
							</p>
							<p>
								<Link href="#">
									<a>+971 4 548 9786</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Content;
