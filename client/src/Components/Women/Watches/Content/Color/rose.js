import React from "react";

import Content from "../Content";

const Rose = props => {
  console.log(props);
  const Rose = props.watches.filter(res => res.color === "rose").map(watch => {
    return <Content watch={watch} key={watch._id} />;
  });

  return Rose;
};

export default Rose;
