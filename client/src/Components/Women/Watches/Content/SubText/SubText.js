import React from "react";

const SubText = props => {
  return (
    <div className="SubText">
      {props.one && props.kors && props.gold ? (
        <h5>WOMEN | MK | GOLD | $100 - $200 </h5>
      ) : props.two && props.kors && props.gold ? (
        <h5>WOMEN | MK | GOLD | $200 - $300 </h5>
      ) : props.three && props.kors && props.gold ? (
        <h5>WOMEN | MK | GOLD | $300 - $400 </h5>
      ) : props.one && props.kors && props.silver ? (
        <h5>WOMEN | MK | SILVER | $100 - $200 </h5>
      ) : props.two && props.kors && props.silver ? (
        <h5>WOMEN | MK | SILVER | $200 - $300 </h5>
      ) : props.three && props.kors && props.silver ? (
        <h5>WOMEN | MK | SILVER | $300 - $400 </h5>
      ) : props.one && props.kors && props.rose ? (
        <h5>WOMEN | MK | ROSE | $100 - $200 </h5>
      ) : props.two && props.kors && props.rose ? (
        <h5>WOMEN | MK | ROSE | $200 - $300 </h5>
      ) : props.three && props.kors && props.rose ? (
        <h5>WOMEN | MK | ROSE | $300 - $400 </h5>
      ) : -props.kors && props.gold ? (
        <h5>WOMEN | MK | GOLD</h5>
      ) : props.kors && props.silver ? (
        <h5>WOMEN | MK | SILVER</h5>
      ) : props.kors && props.rose ? (
        <h5>WOMEN | MK | ROSE</h5>
      ) : props.kors && props.one ? (
        <h5>WOMEN | MK | 100 - 200</h5>
      ) : props.kors && props.two ? (
        <h5>WOMEN | MK | 200 - 300</h5>
      ) : props.kors && props.three ? (
        <h5>WOMEN | MK | 300 - 400</h5>
      ) : props.kors ? (
        <h5>WOMEN | MK </h5>
      ) : //  PRICE 100 -200 | FOSSIL | GOLD    GOLD
      props.one && props.fossil && props.gold ? (
        <h5>WOMEN | FOSSIL | GOLD | $100 - $200 </h5>
      ) : // PRICE 200 - 300 | FOSSIL | GOLD
      props.two && props.fossil && props.gold ? (
        <h5>WOMEN | FOSSIL | GOLD | $200 - $300 </h5>
      ) : // PRICE 300 - 400 | FOSSIL | GOLD
      props.three && props.fossil && props.gold ? (
        <h5>WOMEN | FOSSIL | GOLD | $300 - $400 </h5>
      ) : //  PRICE 100 -200 | FOSSIL | SILVER    SILVER
      props.one && props.fossil && props.silver ? (
        <h5>WOMEN | FOSSIL | SILVER | $100 - $200 </h5>
      ) : // PRICE 200 - 300 | FOSSIL | SILVER
      props.two && props.fossil && props.silver ? (
        <h5>WOMEN | FOSSIL | SILVER | $200 - $300 </h5>
      ) : // PRICE 300 - 400 | FOSSIL | SILVER
      props.three && props.fossil && props.silver ? (
        <h5>WOMEN | FOSSIL | SILVER | $300 - $400 </h5>
      ) : //  PRICE 100 -200 | FOSSIL | ROSE    ROSE
      props.one && props.fossil && props.rose ? (
        <h5>WOMEN | FOSSIL | ROSE | $100 - $200 </h5>
      ) : // PRICE 200 - 300 | FOSSIL | ROSE
      props.two && props.fossil && props.rose ? (
        <h5>WOMEN | FOSSIL | ROSE | $200 - $300 </h5>
      ) : // PRICE 300 - 400 | FOSSIL | Black
      props.three && props.fossil && props.rose ? (
        <h5>WOMEN | FOSSIL | ROSE | $300 - $400 </h5>
      ) : //   FOSSIL | GOLD
      props.fossil && props.gold ? (
        <h5>WOMEN | FOSSIL | GOLD</h5>
      ) : //  FOSSIL | SILVER
      props.fossil && props.silver ? (
        <h5>WOMEN | FOSSIL | SILVER</h5>
      ) : //  FOSSIL | ROSE
      props.fossil && props.rose ? (
        <h5>WOMEN | FOSSIL | ROSE</h5>
      ) : //   FOSSIL | 100 - 200
      props.fossil && props.one ? (
        <h5>WOMEN | FOSSIL | $100 - 200</h5>
      ) : //   FOSSIL | 200 - 300
      props.fossil && props.two ? (
        <h5>WOMEN | FOSSIL | $200 - 300</h5>
      ) : //   FOSSIL | 300 - 400
      props.fossil && props.three ? (
        <h5>WOMEN | FOSSIL | $300 - 400</h5>
      ) : // FOSSIL
      props.fossil ? (
        <h5>WOMEN | FOSSIL</h5>
      ) : // WOMEN | GOLD | 100-200
      props.one && props.gold ? (
        <h5>WOMEN | GOLD | $100 - $200</h5>
      ) : // WOMEN | SILVER | 100-200
      props.one && props.silver ? (
        <h5>WOMEN | SILVER | $100 - $200</h5>
      ) : // WOMEN | ROSE | 100-200
      props.one && props.rose ? (
        <h5>WOMEN | ROSE | $100 - $200</h5>
      ) : // WOMEN | GOLD | 200-300
      props.two && props.gold ? (
        <h5>WOMEN | GOLD | $200 - $300</h5>
      ) : // WOMEN | SILVER | 200-300
      props.two && props.silver ? (
        <h5>WOMEN | SILVER | $200 - $300</h5>
      ) : // WOMEN | ROSE | 200-300
      props.two && props.rose ? (
        <h5>WOMEN | ROSE | $200 - $300</h5>
      ) : // WOMEN | GOLD | 300-400
      props.three && props.gold ? (
        <h5>WOMEN | GOLD | $300 - $400</h5>
      ) : // WOMEN | SILVER | 300-400
      props.three && props.silver ? (
        <h5>WOMEN | SILVER | $300 - $400</h5>
      ) : // WOMEN | ROSE | 300-400
      props.three && props.rose ? (
        <h5>WOMEN | ROSE | $300 - $400</h5>
      ) : // WOMEN | 100-200
      props.one ? (
        <h5>WOMEN | $100-200</h5>
      ) : // WOMEN | 200-300
      props.two ? (
        <h5>WOMEN | $200-300</h5>
      ) : // WOMEN | 100-200
      props.three ? (
        <h5>WOMEN | $300-400</h5>
      ) : // WOMEN | GOLD
      props.gold ? (
        <h5>WOMEN | GOLD</h5>
      ) : // WOMEN | SILVER
      props.silver ? (
        <h5>WOMEN | SILVER</h5>
      ) : // WOMEN | ROSE
      props.rose ? (
        <h5>WOMEN | ROSE</h5>
      ) : (
        <h5>WOMEN</h5>
      )}
    </div>
  );
};

export default SubText;
