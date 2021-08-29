import Link from "next/link";

class SideDrawer extends React.Component {
	state = {
		drawer: false,
	};

	closeDrawer = () => {
		this.props.onClick(this.state.drawer);
	};

	render() {
		return (
			<div className="sidebar-modal">
				<div
					className="modal right fade show"
					style={{
						display: "block",
						paddingRight: "16px",
					}}
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
									onClick={this.closeDrawer}
								>
									<span aria-hidden="true">
										<i className="icofont-close"></i>
									</span>
								</button>

								<h2 className="modal-title" id="myModalLabel2">
									<Link href="/">
										<a>
											<img
												src="/images/logo-light.png"
												alt="Gulf Motorcycles - Repairs & Rentals"
												width="4000px"
												height="4000px"
											/>
										</a>
									</Link>
								</h2>
							</div>

							<div className="modal-body">
								{/* <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Logout</a>
                      </Link>
                    </li>
                  </ul>
                </div> */}

								<div className="sidebar-modal-widget">
									<h3 className="title">Contact Info</h3>

									<ul className="contact-info">
										<li>
											<i className="icofont-google-map"></i>
											Address
											<a href="https://g.page/gulfmotorcycles">
												<address
													itemScope
													itemType="http://schema.org/PostalAddress"
												>
													<span itemProp="streetAddress">
														Gulf Motorcycles, Opposite Al Ahli Driving Centre,
														MK Ghanim Compound
													</span>
													<span itemProp="addressLocality">Al Qouz -3</span>
													<span itemProp="addressRegion">Dubai</span>
													<span itemProp="addressCountry">
														United Arab Emirates
													</span>
												</address>
											</a>
										</li>
										<li>
											<i className="icofont-email"></i>
											Email
											<a href="mailto:info@gulfmotorcycles.com">
												<span>info@gulfmotorcycles.com</span>
											</a>
										</li>
										<li>
											<i className="icofont-phone"></i>
											Phone
											<span>
												<a href="tel:+97145489786">+971 4 548 9786</a>
											</span>
											<span>
												<a href="tel:+971567644951">+971 5 6764 4951</a>
											</span>
										</li>
									</ul>
								</div>
								<div className="sidebar-modal-widget">
									<h3 className="title">Connect With Us</h3>

									<ul className="social-list">
										<li>
											<Link href="https://www.tiktok.com/@gulfmotorcycles">
												<a>
													<i aria-hidden className="fab fa-tiktok"></i>
												</a>
											</Link>
										</li>
										<li>
											<Link href="https://www.facebook.com/gulfmotorcyclerepairs/">
												<a>
													<i className="icofont-facebook"></i>
												</a>
											</Link>
										</li>
										<li>
											<Link href="https://twitter.com/GulfRepairs">
												<a>
													<i className="icofont-twitter"></i>
												</a>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/gulfrepairs/">
												<a>
													<i className="icofont-instagram"></i>
												</a>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/company/gulf-motorcycles">
												<a>
													<i className="icofont-linkedin"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SideDrawer;
