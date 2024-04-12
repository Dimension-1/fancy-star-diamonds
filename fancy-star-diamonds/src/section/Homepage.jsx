import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Collection from "../components/Collection";
import Whoweare from "../components/Whoweare";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Whoweare />
      {/* <Collection /> */}
      <Footer />
    </>
  );
};

export default Homepage;
