import React, { Component } from "react";

import Content from "./Content/Content";
import axios from "axios";

import One from "./Content/Price/priceOne";
import Two from "./Content/Price/priceTwo";
import Three from "./Content/Price/priceThree";

import Gold from "./Content/Color/gold";
import Silver from "./Content/Color/silver";
import Black from "./Content/Color/black";

import MK from "./Content/Brand/MK";
import Fossil from "./Content/Brand/Fossil";

import SubText from "./Content/SubText/SubText";
// import { Link } from "react-router-dom";

import Menu from "./Menu/Menu";

import "./Menu/Menu.css";
import "./Watches.css";

class Watches extends Component {
  // prettier-ignore
  state = {
    watches: [], one: false, two: false, three: false, kors: false, fossil: false, black: false, gold: false, silver: false, show:false
  };
  componentWillMount() {
    axios
      .get("/api/items")
      .then(res => this.setState({ watches: res.data }))
      .catch(err => console.log(err));
  }

  toggleDiv = () => {
    this.setState({ show: !this.state.show });
  };

  priceOne = () => {
    this.setState({ two: false, three: false, one: !this.state.one });
  };
  priceTwo = () => {
    this.setState({ three: false, one: false, two: !this.state.two });
  };
  priceThree = () => {
    this.setState({ two: false, one: false, three: !this.state.three });
  };

  onMk = () => {
    this.setState({ fossil: false, kors: !this.state.kors });
  };
  onFossil = () => {
    this.setState({ kors: false, fossil: !this.state.fossil });
  };

  onGold = () => {
    this.setState({ black: false, silver: false, gold: !this.state.gold });
  };
  onSilver = () => {
    this.setState({ gold: false, black: false, silver: !this.state.silver });
  };
  onBlack = () => {
    this.setState({ gold: false, silver: false, black: !this.state.black });
  };

  render() {
    // // SORTS ALL WATCHES
    const Watch = this.state.watches
      .filter(res => res.sex === "male")
      .map(watch => {
        return <Content watch={watch} key={watch._id} />;
      });

    const Men = this.state.watches.filter(res => res.sex === "male");

    return (
      <div className="Watches">
        <h2 onClick={() => this.toggleDiv()} className="toggleButton">
          Filter
        </h2>
        <Menu
          one={this.priceOne}
          two={this.priceTwo}
          three={this.priceThree}
          mk={this.onMk}
          fossil={this.onFossil}
          gold={this.onGold}
          silver={this.onSilver}
          black={this.onBlack}
          show={this.state.show}
        />
        <div className="Content">
          <h2>Shop Watches for Men</h2>
          <SubText
            one={this.state.one}
            two={this.state.two}
            three={this.state.three}
            gold={this.state.gold}
            silver={this.state.silver}
            black={this.state.black}
            kors={this.state.kors}
            fossil={this.state.fossil}
          />
          <div className="Container">
            {this.state.kors ? (
              <MK
                watches={Men}
                kors={this.state.kors}
                one={this.state.one}
                two={this.state.two}
                three={this.state.three}
                gold={this.state.gold}
                silver={this.state.silver}
                black={this.state.black}
              />
            ) : this.state.fossil ? (
              <Fossil
                watches={Men}
                fossil={this.state.fossil}
                one={this.state.one}
                two={this.state.two}
                three={this.state.three}
                gold={this.state.gold}
                silver={this.state.silver}
                black={this.state.black}
              />
            ) : this.state.one ? (
              <One
                watches={Men}
                one={this.state.one}
                gold={this.state.gold}
                silver={this.state.silver}
                black={this.state.black}
              />
            ) : this.state.two ? (
              <Two
                watches={Men}
                two={this.state.two}
                gold={this.state.gold}
                silver={this.state.silver}
                black={this.state.black}
              />
            ) : this.state.three ? (
              <Three
                watches={Men}
                three={this.state.three}
                gold={this.state.gold}
                silver={this.state.silver}
                black={this.state.black}
              />
            ) : this.state.gold ? (
              <Gold watches={Men} />
            ) : this.state.silver ? (
              <Silver watches={Men} />
            ) : this.state.black ? (
              <Black watches={Men} />
            ) : (
              Watch
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Watches;
