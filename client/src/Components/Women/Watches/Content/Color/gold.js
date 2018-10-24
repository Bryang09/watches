import React from "react";

import Content from "../Content";

const Gold = props => {
  console.log(props);
  const Gold = props.watches.filter(res => res.color === "gold").map(watch => {
    return <Content watch={watch} key={watch._id} />;
  });

  return Gold;
};

export default Gold;
