import React from "react";

const Menu = props => {
  return (
    <div className="Menu">
      {props.women ? (
        <div className={props.show ? "showDiv MenuText" : " hideDiv MenuText"}>
          <div className="Options">
            <h4>Search By: Price</h4>
            <div className="options">
              <ul>
                <li onClick={props.one}>$100-$200 </li>
                <li onClick={props.two}>$201-$300</li>
                <li onClick={props.three}>$301-$400</li>
              </ul>
            </div>
          </div>
          <div className="Options">
            <h4>Search By Brand</h4>
            <div className="options">
              <ul>
                <li onClick={props.mk}>Michael Kors</li>
                <li onClick={props.fossil}>Fossil</li>
              </ul>
            </div>
          </div>
          <div className="Options">
            <h4>Search By: Color</h4>
            <div className="options">
              <ul>
                <li onClick={props.gold}>Gold</li>
                <li onClick={props.silver}>Silver</li>
                <li onClick={props.rose}>Rose</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
