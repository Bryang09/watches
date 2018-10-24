import React from "react";

import { Link } from "react-router-dom";

import "./Sub1.css";

const Sub1 = () => {
  return (
    <div className="Sub1">
      <div className="Text">
        <h2>Modern Styles</h2>
        <h4>We pride ourselves in having the most stylish watches around</h4>
        <Link to="/men">
          <h5 className="homeLink">Shop Men</h5>
        </Link>
      </div>
      <div className="sub1Img" />
      <hr />
    </div>
  );
};

export default Sub1;
