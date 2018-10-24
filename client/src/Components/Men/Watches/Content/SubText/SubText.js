import React from "react";

const SubText = props => {
  return (
    <div className="SubText">
      {props.one && props.kors && props.gold ? (
        <h5>MEN | MK | GOLD | $100 - $200 </h5>
      ) : props.two && props.kors && props.gold ? (
        <h5>MEN | MK | GOLD | $200 - $300 </h5>
      ) : props.three && props.kors && props.gold ? (
        <h5>MEN | MK | GOLD | $300 - $400 </h5>
      ) : props.one && props.kors && props.silver ? (
        <h5>MEN | MK | SILVER | $100 - $200 </h5>
      ) : props.two && props.kors && props.silver ? (
        <h5>MEN | MK | SILVER | $200 - $300 </h5>
      ) : props.three && props.kors && props.silver ? (
        <h5>MEN | MK | SILVER | $300 - $400 </h5>
      ) : props.one && props.kors && props.black ? (
        <h5>MEN | MK | BLACK | $100 - $200 </h5>
      ) : props.two && props.kors && props.black ? (
        <h5>MEN | MK | BLACK | $200 - $300 </h5>
      ) : props.three && props.kors && props.black ? (
        <h5>MEN | MK | BLACK | $300 - $400 </h5>
      ) : -props.kors && props.gold ? (
        <h5>MEN | MK | GOLD</h5>
      ) : props.kors && props.silver ? (
        <h5>MEN | MK | SILVER</h5>
      ) : props.kors && props.black ? (
        <h5>MEN | MK | BLACK</h5>
      ) : props.kors && props.one ? (
        <h5>MEN | MK | 100 - 200</h5>
      ) : props.kors && props.two ? (
        <h5>MEN | MK | 200 - 300</h5>
      ) : props.kors && props.three ? (
        <h5>MEN | MK | 300 - 400</h5>
      ) : props.kors ? (
        <h5>MEN | MK </h5>
      ) : //  PRICE 100 -200 | FOSSIL | GOLD    GOLD
      props.one && props.fossil && props.gold ? (
        <h5>MEN | FOSSIL | GOLD | $100 - $200 </h5>
      ) : // PRICE 200 - 300 | FOSSIL | GOLD
      props.two && props.fossil && props.gold ? (
        <h5>MEN | FOSSIL | GOLD | $200 - $300 </h5>
      ) : // PRICE 300 - 400 | FOSSIL | GOLD
      props.three && props.fossil && props.gold ? (
        <h5>MEN | FOSSIL | GOLD | $300 - $400 </h5>
      ) : //  PRICE 100 -200 | FOSSIL | SILVER    SILVER
      props.one && props.fossil && props.silver ? (
        <h5>MEN | FOSSIL | SILVER | $100 - $200 </h5>
      ) : // PRICE 200 - 300 | FOSSIL | SILVER
      props.two && props.fossil && props.silver ? (
        <h5>MEN | FOSSIL | SILVER | $200 - $300 </h5>
      ) : // PRICE 300 - 400 | FOSSIL | SILVER
      props.three && props.fossil && props.silver ? (
        <h5>MEN | FOSSIL | SILVER | $300 - $400 </h5>
      ) : //  PRICE 100 -200 | FOSSIL | BLACK    BLACK
      props.one && props.fossil && props.black ? (
        <h5>MEN | FOSSIL | BLACK | $100 - $200 </h5>
      ) : // PRICE 200 - 300 | FOSSIL | BLACK
      props.two && props.fossil && props.black ? (
        <h5>MEN | FOSSIL | BLACK | $200 - $300 </h5>
      ) : // PRICE 300 - 400 | FOSSIL | Black
      props.three && props.fossil && props.black ? (
        <h5>MEN | FOSSIL | BLACK | $300 - $400 </h5>
      ) : //   FOSSIL | GOLD
      props.fossil && props.gold ? (
        <h5>MEN | FOSSIL | GOLD</h5>
      ) : //  FOSSIL | SILVER
      props.fossil && props.silver ? (
        <h5>MEN | FOSSIL | SILVER</h5>
      ) : //  FOSSIL | BLACK
      props.fossil && props.black ? (
        <h5>MEN | FOSSIL | BLACK</h5>
      ) : //   FOSSIL | 100 - 200
      props.fossil && props.one ? (
        <h5>MEN | FOSSIL | $100 - 200</h5>
      ) : //   FOSSIL | 200 - 300
      props.fossil && props.two ? (
        <h5>MEN | FOSSIL | $200 - 300</h5>
      ) : //   FOSSIL | 300 - 400
      props.fossil && props.three ? (
        <h5>MEN | FOSSIL | $300 - 400</h5>
      ) : // FOSSIL
      props.fossil ? (
        <h5>MEN | FOSSIL</h5>
      ) : // MEN | GOLD | 100-200
      props.one && props.gold ? (
        <h5>MEN | GOLD | $100 - $200</h5>
      ) : // MEN | SILVER | 100-200
      props.one && props.silver ? (
        <h5>MEN | SILVER | $100 - $200</h5>
      ) : // MEN | BLACK | 100-200
      props.one && props.black ? (
        <h5>MEN | BLACK | $100 - $200</h5>
      ) : // MEN | GOLD | 200-300
      props.two && props.gold ? (
        <h5>MEN | GOLD | $200 - $300</h5>
      ) : // MEN | SILVER | 200-300
      props.two && props.silver ? (
        <h5>MEN | SILVER | $200 - $300</h5>
      ) : // MEN | BLACK | 200-300
      props.two && props.black ? (
        <h5>MEN | BLACK | $200 - $300</h5>
      ) : // MEN | GOLD | 300-400
      props.three && props.gold ? (
        <h5>MEN | GOLD | $300 - $400</h5>
      ) : // MEN | SILVER | 300-400
      props.three && props.silver ? (
        <h5>MEN | SILVER | $300 - $400</h5>
      ) : // MEN | BLACK | 300-400
      props.three && props.black ? (
        <h5>MEN | BLACK | $300 - $400</h5>
      ) : // MEN | 100-200
      props.one ? (
        <h5>MEN | $100-200</h5>
      ) : // MEN | 200-300
      props.two ? (
        <h5>MEN | $200-300</h5>
      ) : // MEN | 100-200
      props.three ? (
        <h5>MEN | $300-400</h5>
      ) : // MEN | GOLD
      props.gold ? (
        <h5>MEN | GOLD</h5>
      ) : // MEN | SILVER
      props.silver ? (
        <h5>MEN | SILVER</h5>
      ) : // MEN | BLACK
      props.black ? (
        <h5>MEN | BLACK</h5>
      ) : (
        <h5>MEN</h5>
      )}
    </div>
  );
};

export default SubText;
