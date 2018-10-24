import React from "react";

import Content from "../Content";

const Two = props => {
  console.log(props);
  const Two = props.watches
    .filter(
      res =>
        props.gold && props.two
          ? res.price2 > 201 && res.price2 < 300 && res.color === "gold"
          : props.silver && props.two
            ? res.price2 > 201 && res.price2 < 300 && res.color === "silver"
            : props.black && props.two
              ? res.price2 > 201 && res.price2 < 300 && res.color === "black"
              : res.price2 > 201 && res.price2 < 300
    )
    .map(watch => {
      return <Content watch={watch} key={watch._id} />;
    });

  return Two;
};

export default Two;
