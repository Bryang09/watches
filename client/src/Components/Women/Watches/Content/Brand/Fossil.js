import React from "react";

import Content from "../Content";

const Fossil = props => {
  const fossil = props.watches
    .filter(
      // prettier-ignore
      res =>
          //  BRAND FOSSIL |  COLOR IS GOLD | PRICE < 201
          props.fossil && props.one && props.gold
            ? res.brand === "Fossil" && res.price2 < 201 && res.color === "gold"
            : // BRAND FOSSIL |  COLOR IS SILVER | PRICE < 201
              props.fossil && props.one && props.silver ? res.brand === "Fossil" && res.price2 < 201 && res.color === "silver" :
               // BRAND FOSSIL |  COLOR IS ROSE | PRICE < 201
                props.fossil && props.one && props.rose ? res.brand === "Fossil" && res.price2 < 201 && res.color === "rose" :
                 // BRAND FOSSIL |  COLOR IS GOLD | PRICE < 201
                  props.fossil && props.one? res.brand === "Fossil" && res.price2 < 201 :
                   // BRAND FOSSIL |  COLOR IS GOLD | PRICE 200 - 300
                    props.fossil && props.two && props.gold ? res.brand === "Fossil" && res.price2 > 200 && res.price2 < 301 && res.color === "gold" :
                     // BRAND FOSSIL |  COLOR IS SILVER | PRICE 200 - 300
                      props.fossil && props.two && props.silver ? res.brand === "Fossil" && res.price2 > 200 && res.price2 < 301 && res.color === "silver" :
                       // BRAND FOSSIL |  COLOR IS ROSE | PRICE 200 - 300
                        props.fossil && props.two && props.rose ? res.brand === "Fossil" && res.price2 > 200 && res.price2 < 301 && res.color === "rose" :

                        //  BRAND FOSSIL |  COLOR IS GOLD | PRICE 300 - 400
                          props.fossil && props.three && props.gold ? res.brand === "Fossil" && res.price2 > 300 && res.price2 < 401 && res.color === "gold" :
                           // BRAND FOSSIL |  COLOR IS SILVER | PRICE 300 - 400
                            props.fossil && props.three && props.silver ? res.brand === "Fossil" && res.price2 > 300 && res.price2 < 401 && res.color === "silver" :
                             // BRAND FOSSIL |  COLOR IS ROSE | PRICE 300 - 400
                              props.fossil && props.three && props.rose ? res.brand === "Fossil" && res.price2 > 300 && res.price2 < 401 && res.color === "rose" : 
                              //  BRAND FOSSIL  | PRICE < 201
                                props.fossil && props.one ? res.brand === "Fossil" && res.price2 < 201 :
                                 //  BRAND FOSSIL  | PRICE  200 - 300
                                  props.fossil && props.two ? res.brand === "Fossil" && res.price2 > 200 && res.price2 < 301 :
                                   //  BRAND FOSSIL  | PRICE  200 - 300
                                    props.fossil && props.three ? res.brand === "Fossil" && res.price2 > 300 && res.price2 < 401 : 
                                   //  BRAND FOSSIL  | GOLD
                                    props.fossil && props.gold ? res.brand === "Fossil" && res.color === 'gold' :    
                                   //  BRAND FOSSIL  | SILVER
                                    props.fossil && props.silver ? res.brand === "Fossil" && res.color === 'silver' :    
                                   //  BRAND FOSSIL  | ROSE
                                    props.fossil && props.rose ? res.brand === "Fossil" && res.color === 'rose' :    
                                    // BRAND FOSSIL
                                    props.fossil ? res.brand === "Fossil" : null
    )
    .map(watch => {
      return <Content watch={watch} key={watch._id} />;
    });

  return fossil;
};

export default Fossil;
