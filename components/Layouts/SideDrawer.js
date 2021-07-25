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
                        alt="logo"
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
                      <span>
                        Gulf Motorcycles, Al Qouz -3, Opposite Al Ahli Driving
                        Centre, MK Ghanim Compound, Unit 45, Dubai, United Arab
                        Emirates
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>info@gulfmotorcycles.com</span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>04 548 9786</span>
                      <span>+971 567 644 951</span>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
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
