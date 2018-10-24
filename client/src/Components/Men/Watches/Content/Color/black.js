import React from "react";

import Content from "../Content";

const Black = props => {
  console.log(props);
  const Black = props.watches
    .filter(res => res.color === "black")
    .map(watch => {
      return <Content watch={watch} key={watch._id} />;
    });

  return Black;
};

export default Black;
