import React, { Component } from "react";

import "./Watch.css";

import axios from "axios";
import Nav from "../../../Nav/Nav";

// import { Link } from "react-router-dom";

class Watch extends Component {
  state = {
    watch: {},
    quantity: 0,
    cart: {}
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/api/items/${id}`)
      .then(res => this.setState({ watch: res.data }))
      .catch(err => console.log(err));
  };

  onIncrease = () => {
    this.setState({
      quantity: this.state.quantity + 1,
      cart: this.state.watch
    });
  };

  onDecrease = () => {
    return this.state.quantity > 0
      ? this.setState({ quantity: this.state.quantity - 1 })
      : null;
  };

  render() {
    console.log(this.state.cart);
    return (
      <div className="Watch">
        <Nav />
        <div className="watchContent">
          <div
            className="img"
            style={{
              backgroundImage: `url(${this.state.watch.src2})`,
              backgroundSize: "cover",
              backgroundPosition: "center center"
            }}
          />
          <div className="Option">
            <div className="optionWrapper">
              <h4>{this.state.watch.brand}</h4>
              <h3>{this.state.watch.name}</h3>
              <ul>
                <li>Stainless Steel</li>
                <li>Water Resistant Up To 5 ATM</li>
                <li>2-Year Warranty</li>
              </ul>
              <div className="quantity">
                <span onClick={this.onDecrease}>-</span>
                <span style={{ cursor: "text" }}>{this.state.quantity}</span>
                <span onClick={this.onIncrease}>+</span>
              </div>
              <h5 id="cart" onClick={this.click}>
                Add To Cart
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Watch;
