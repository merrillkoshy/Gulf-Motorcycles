import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Banner";

import Discover from "../components/Discover";
import Features from "../components/Features";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Discover />
      <Features />

      <Footer />
    </React.Fragment>
  );
};

export default Home;
