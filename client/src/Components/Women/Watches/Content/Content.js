import React from "react";

// import { Link } from "react-router-dom";

const Content = props => {
  return (
    <div className="WatchBox" key={props.watch._id}>
      {/* <Link
        to={{
          pathname: `/men/${props.watch._id}`
        }}
      > */}
      <div
        className="img"
        style={{
          background: `url(${props.watch.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "80%"
        }}
      />
      <div className="desc">
        <h4>{props.watch.name}</h4>
        <h5 style={{ textDecoration: "line-through", color: "red" }}>
          Was: ${props.watch.price1}
        </h5>
        <h5 style={{ color: "#000" }}>Now: ${props.watch.price2}</h5>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Content;
