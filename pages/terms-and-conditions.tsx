import React, { Fragment } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/TermsAndConditions/Banner";
import Content from "../components/TermsAndConditions/Content";

const TermsAndConditions = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default TermsAndConditions;
