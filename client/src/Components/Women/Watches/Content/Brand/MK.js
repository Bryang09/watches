import React from "react";

import Content from "../Content";

const MK = props => {
  console.log(props);

  const Kors = props.watches
    .filter(
      //prettier-ignore
      res =>
           //  BRAND MK |  COLOR IS GOLD | PRICE < 201
          props.kors && props.one && props.gold  ? res.brand === "Michael Kors" && res.price2 < 201 && res.color === "gold" :
           // BRAND MK |  COLOR IS SILVER | PRICE < 201
          props.kors && props.one && props.silver  ? res.brand === "Michael Kors" && res.price2 < 201 && res.color === "silver" :
           // BRAND MK |  COLOR IS ROSE | PRICE < 201
          props.kors && props.one && props.rose  ? res.brand === "Michael Kors" && res.price2 < 201 && res.color === "rose" :
           // BRAND MK |  COLOR IS GOLD | PRICE < 201
          props.kors && props.one  ? res.brand === "Michael Kors" && res.price2 < 201 :
           // BRAND MK |  COLOR IS GOLD | PRICE 200 - 300
          props.kors && props.two && props.gold  ? res.brand === "Michael Kors" && res.price2 > 200 && res.price2 < 301 && res.color === "gold" :
           // BRAND MK |  COLOR IS SILVER | PRICE 200 - 300
          props.kors && props.two && props.silver ? res.brand === "Michael Kors" && res.price2 > 200 && res.price2 < 301 && res.color === "silver" :
           // BRAND MK |  COLOR IS ROSE | PRICE 200 - 300
          props.kors && props.two && props.rose ? res.brand === "Michael Kors" && res.price2 > 200 && res.price2 < 301 && res.color === "rose":
           //  BRAND MK |  COLOR IS GOLD | PRICE 300 - 400
          props.kors && props.three && props.gold ? res.brand === "Michael Kors" && res.price2 > 300 && res.price2 < 401 && res.color === "gold":
           // BRAND MK |  COLOR IS SILVER | PRICE 300 - 400
          props.kors && props.three && props.silver ? res.brand === "Michael Kors" && res.price2 > 300 && res.price2 < 401 && res.color === "silver":
           // BRAND MK |  COLOR IS ROSE | PRICE 300 - 400
          props.kors && props.three && props.rose ? res.brand === "Michael Kors" && res.price2 > 200 && res.price2 < 401 && res.color === "rose" :
           //  BRAND MK  | PRICE < 201
          props.kors && props.one ? res.brand === "Michael Kors" && res.price2 < 201 :
           //  BRAND MK  | PRICE  200 - 300
          props.kors && props.two ? res.brand === "Michael Kors" && res.price2 > 200 && res.price2 < 301 :
           //  BRAND MK  | PRICE  300 - 400
          props.kors && props.three ? res.brand === "Michael Kors" && res.price2 > 300 && res.price2 < 401 :
           //  BRAND MK  | GOLD
          props.kors && props.gold ? res.brand === "Michael Kors" && res.color === "gold" :
           //  BRAND MK  | SILVER
          props.kors && props.silver ? res.brand === "Michael Kors" && res.color === "silver" :
           //  BRAND MK  | Rose
          props.kors && props.rose  ? res.brand === "Michael Kors" && res.color === "rose"  :
          //  BRNAD MK
          props.kors  ? res.brand === "Michael Kors" : null
    )

    .map(watch => {
      return <Content watch={watch} key={watch._id} />;
    });

  return Kors;
};

export default MK;
