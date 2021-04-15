import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-area pt-5 pb-0 bg-image">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <Link href="#">
                <a className="logo">
                  <img src="/images/logo-dark.png" alt="logo-light" />
                </a>
              </Link>
              <p>Service • Leasing • Parts</p>

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
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a>Services</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Contact</h3>
              <ul>+971 56 455 8337</ul>
              <ul>info@gulfmotorcycles.com</ul>
              <ul>
                Gulf Motorcycles-Motorcycle Repairs, Behind Burjeel Hospital,
                Sheikh Zayed Road, 6A Street, Al Quoz Industrial 1, Dubai, UAE
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area mt-3 pb-3">
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
                  <Link href="/terms-and-conditions">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
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
};

export default Footer;
