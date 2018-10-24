import React from "react";

import Hero from "./Hero/Hero";
import Watches from "./Watches/Watches";
import Nav from "../Nav/Nav";

const Men = () => {
  return (
    <div className="Men">
      <Nav />
      <Hero />
      <Watches />
    </div>
  );
};

export default Men;
