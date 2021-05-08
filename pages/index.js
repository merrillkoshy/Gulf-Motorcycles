import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Banner";

import Discover from "../components/Discover";
import Features from "../components/Features";
import Head from "next/head";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="description" content={"description"} />
      </Head>
      <Navbar />
      <Banner />
      <Discover />
      <Features />

      <Footer />
    </React.Fragment>
  );
};

export default Home;
