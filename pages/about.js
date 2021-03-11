import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/About/Banner";

import AboutContent from "../components/About/AboutContent";

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <AboutContent />

      <Footer />
    </React.Fragment>
  );
};

export default About;
