import Link from "next/link";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area ptb-100 pb-0 bg-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="#">
                  <a className="logo">
                    <img src="/images/logo-light.png" alt="logo-light" />
                  </a>
                </Link>
                <p>Something really nice</p>

                <ul className="social-list">
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-facebook"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-instagram"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-linkedin"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a>About</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact</h3>
                Details
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright @2021 Gulf Motorcycles for Motorcycle Repairs. All
                  rights reserved
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="#">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
