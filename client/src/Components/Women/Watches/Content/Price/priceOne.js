import React from "react";

import Content from "../Content";

const One = props => {
  console.log(props);
  const One = props.watches
    .filter(
      res =>
        props.gold && props.one
          ? res.price2 < 201 && res.color === "gold"
          : props.silver && props.one
            ? res.price2 < 201 && res.color === "silver"
            : props.black && props.one
              ? res.price2 < 201 && res.color === "black"
              : res.price2 < 201
    )
    .map(watch => {
      return <Content watch={watch} key={watch._id} />;
    });

  return One;
};

export default One;
