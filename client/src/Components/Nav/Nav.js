import React from "react";

import "./Nav.css";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <NavLink to="/" activeClassName="active">
        <h2>
          Bryan's <span style={{ color: "#eeca1c" }}>Watches</span>
        </h2>
      </NavLink>
      <div className="Navigation">
        <h4>
          <NavLink to="/men" activeClassName="active">
            Men
          </NavLink>
        </h4>

        <h4>
          <NavLink to="/women" activeClassName="active">
            Women
          </NavLink>
        </h4>

        <h4>
          <a href="#">Cart</a>
        </h4>
      </div>
    </div>
  );
};

export default Nav;
