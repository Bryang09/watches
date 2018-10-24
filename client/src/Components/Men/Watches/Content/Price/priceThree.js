import React from "react";

import Content from "../Content";

const Three = props => {
  console.log(props);
  const Three = props.watches
    .filter(
      res =>
        props.gold && props.three
          ? res.price2 > 300 && res.price2 < 400 && res.color === "gold"
          : props.silver && props.three
            ? res.price2 > 300 && res.price2 < 400 && res.color === "silver"
            : props.black && props.three
              ? res.price2 > 300 && res.price2 < 400 && res.color === "black"
              : res.price2 > 300 && res.price2 < 400
    )
    .map(watch => {
      return <Content watch={watch} key={watch._id} />;
    });

  return Three;
};

export default Three;
