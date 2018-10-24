import React from "react";

import Nav from "../Nav/Nav";
import Hero from "./Hero/Hero";
import Sub1 from "./Sub1/Sub1";
import Sub2 from "./Sub2/Sub2";
import Sub3 from "./Sub3/Sub3";
import Footer from "../Footer/Footer";

import "./Landing.css";

const Landing = () => {
  return (
    <div className="Landing">
      <Nav />
      <Hero />
      <Sub1 />
      <hr />
      <Sub2 />
      <hr id="First" />
      <Sub3 />
      <Footer />
    </div>
  );
};

export default Landing;
