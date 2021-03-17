import React, { useEffect, useState } from "react";

import Link from "../../utils/ActiveLink";
import SideDrawer from "./SideDrawer";
import SearchForm from "./SearchForm";
import { useRouter } from "next/router";
import firebase from "../../lib/firebaseConfig";
import "firebase/auth";

const Navbar = (props) => {
  const [_isMounted, setIsMounted] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.replace("/admin");
      });
  };
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  let layOutCls = "";
  let logo = "/images/mono.png";
  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show ";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <header id="header">
        <div id="navbar" className={`crake-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={logo} alt="logo" />
                </a>
              </Link>
              <Link href="/">
                <div className="brand-container">
                  <div className="col brand-name">Gulf Motorcycles</div>
                  <div className="col brand-sub">Motorcycle Repairs</div>
                </div>
              </Link>
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="navbar-toggler-icon "></i>
              </button>
              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav nav ml-auto  d-block d-xs-none d-md-none ">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={(e) =>
                        props.currentTab(e.currentTarget.innerText)
                      }
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={(e) =>
                        props.currentTab(e.currentTarget.innerText)
                      }
                    >
                      Users
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={(e) =>
                        props.currentTab(e.currentTarget.innerText)
                      }
                    >
                      Bookings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={(e) =>
                        props.currentTab(e.currentTarget.innerText)
                      }
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-2 adminTag">{props.userName}</div>
              <div>
                <div className="justify-content-right align-items-right">
                  <button onClick={logout} className="btn btn-primary">
                    Logout
                  </button>
                </div>
                {/* <ul className="navbar-nav">
                  <li className="header-search-box">
                    <Link activeClassName="active" href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleSearchForm();
                        }}
                        title="Search"
                      >
                        <i className="icofont-search-2"></i>
                      </a>
                    </Link>
                  </li>
                  <li onClick={handleDrawer}>
                    <div className="side-menu">
                      <span className="bar-1"></span>
                      <span className="bar-2"></span>
                      <span className="bar-3"></span>
                    </div>
                  </li>
                </ul> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
