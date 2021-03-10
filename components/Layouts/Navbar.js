import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import SideDrawer from "./SideDrawer";
import SearchForm from "./SearchForm";

const Navbar = (props) => {
  const [_isMounted, setIsMounted] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [searchForm, setSearchForm] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleSearchForm = () => {
    setSearchForm(!searchForm);
  };

  let { pathname } = props.router;
  let { products } = props;

  let layOutCls = "";
  let logo = "/images/logo.png";
  if (pathname == "/digital-marketing") {
    layOutCls = "marketing-navbar";
    logo = "/images/logo-light.png";
  }

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <header id="header">
        <div id="navbar" className={`crake-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/saas">
                <a className="navbar-brand">
                  <img src={logo} alt="logo" />
                </a>
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
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav nav ml-auto">
                  <li className="nav-item">
                    <Link activeClassName="active" href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="active" href="/about">
                      <a className="nav-link">About Us</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link activeClassName="active" href="/services">
                      <a className="nav-link">Services</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mr-auto others-option">
                <ul className="navbar-nav">
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
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {drawer ? <SideDrawer onClick={handleDrawer} /> : ""}
      {searchForm ? <SearchForm onClick={handleSearchForm} /> : ""}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
