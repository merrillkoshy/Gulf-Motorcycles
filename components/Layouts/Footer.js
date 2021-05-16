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
                  <img
                    title="Gulf Motorcycles - Repairs & Rentals"
                    src="/images/logo-dark.png"
                    alt="logo-light"
                    width="4000px"
                    height="4000px"
                  />
                </a>
              </Link>
              <p>Service • Leasing • Parts</p>

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
                {/* <li>
                  <Link href="/services">
                    <a href="#">Services</a>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Contact</h3>
              <ul>
                <li>+971 567 644 951</li>
                <li>info@gulfmotorcycles.com</li>
                <li>
                  Gulf Motorcycles, Al Qouz -3, Opposite Al Ahli Driving Centre,
                  MK Ghanim Compound, Unit 45, Dubai, United Arab Emirates
                </li>
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
