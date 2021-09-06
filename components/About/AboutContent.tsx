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
									<img
										src="/images/Contact_Page_Icons-03.png"
										alt="Gulf Motorcycle Repairs Dubai"
									/>
									<h3>Our Company</h3>
									<p>
										Gulf Motorcycles offers a full range of repairs &
										maintenance services to all brands of two wheeler delivery
										motorcycles in Dubai, located at Al Quoz.
									</p>
								</div>

								<div className="single-holder-box mt-30">
									<img
										src="/images/Contact_Page_Icons-01.png"
										alt="Gulf Motorcycle Repairs Dubai"
									/>
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
									<img
										src="/images/Contact_Page_Icons-02.png"
										alt="Gulf Motorcycle Repairs Dubai"
									/>
									<h3>Who we are</h3>
									<p>
										Our professionals are trained to manage a wide range of two
										wheeler related services.
									</p>
								</div>

								<div className="single-holder-box mt-30">
									<img
										src="/images/Contact_Page_Icons-04.png"
										alt="Gulf Motorcycle Repairs Dubai"
									/>
									<h3>Contact Us</h3>
									We are here:
									<Link href="https://g.page/gulfMotorcycles">
										<a>
											<address
												itemScope
												itemType="http://schema.org/PostalAddress"
											>
												<span itemProp="streetAddress">
													Gulf Motorcycles, Opposite Al Ahli Driving Centre, MK
													Ghanim Compound
												</span>
												<span itemProp="addressLocality">Al Qouz -3</span>
												<span itemProp="addressRegion">Dubai</span>
												<span itemProp="addressCountry">
													United Arab Emirates
												</span>
											</address>
										</a>
									</Link>
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
									Gulf Motorcycles was started with the sole intention to offer
									the most affordable repair and maintenance services for
									delivery motorcycles in Dubai.
								</p>
							</div>

							<p>
								Handpicked for their talent with all kinds of work, our team of
								highly-trained mechanics undertake the best quality work for our
								customers ensuring that we remain within your budget
								expectations.
							</p>

							<p>
								Affordability and quality service is our motto. It is important
								to us that customers can rely on Gulf Motorcycles with a peace
								of mind, and most importantly, the peace of ride.
							</p>
							<Link href="/services">
								<a className="btn btn-primary">Our Services</a>
							</Link>
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
				<img src="/images/cogwheel.svg" alt="img" className="floaters" />
			</div>
			<div className="bg-gray shape-1"></div>
			<div className="shape6">
				<img src="/images/cogwheel.svg" alt="img" className="floaters" />
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
				<img src="/images/wrench.svg" alt="shape" className="floaters" />
			</div>
		</section>
	);
};

export default AboutContent;
