import React, { Fragment } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/PrivacyPolicy/Banner";
import Content from "../components/PrivacyPolicy/Content";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPolicy;
