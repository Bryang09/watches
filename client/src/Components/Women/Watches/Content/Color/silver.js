import React from "react";

import Content from "../Content";

const Silver = props => {
  console.log(props);
  const Silver = props.watches
    .filter(res => res.color === "silver")
    .map(watch => {
      return <Content watch={watch} key={watch._id} />;
    });

  return Silver;
};

export default Silver;
