import React, { Component } from "react";

import Content from "./Content/Content";
import axios from "axios";

import One from "./Content/Price/priceOne";
import Two from "./Content/Price/priceTwo";
import Three from "./Content/Price/priceThree";

import Gold from "./Content/Color/gold";
import Silver from "./Content/Color/silver";
import Rose from "./Content/Color/rose";

import MK from "./Content/Brand/MK";
import Fossil from "./Content/Brand/Fossil";

import SubText from "./Content/SubText/SubText";
// import { Link } from "react-router-dom";

import Menu from "./Menu/Menu";

// import "./Menu/Menu.css";
// import "./Watches.css";

class Watches extends Component {
  // prettier-ignore
  state = {
    watches: [], one: false, two: false, three: false, kors: false, fossil: false, rose: false, gold: false, silver: false, show:false, women: true, men: false
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
    this.setState({ rose: false, silver: false, gold: !this.state.gold });
  };
  onSilver = () => {
    this.setState({ gold: false, rose: false, silver: !this.state.silver });
  };
  onRose = () => {
    this.setState({ gold: false, silver: false, rose: !this.state.rose });
  };

  render() {
    const Women = this.state.watches.filter(res => res.sex === "female");

    // // SORTS ALL WATCHES
    const Watch = this.state.watches
      .filter(res => res.sex === "female")
      .map(watch => {
        return <Content watch={watch} key={watch._id} />;
      });

    console.log(Watch);
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
          rose={this.onRose}
          show={this.state.show}
          women={this.state.women}
        />
        <div className="Content">
          <h2>Shop Watches for Women</h2>
          <SubText
            one={this.state.one}
            two={this.state.two}
            three={this.state.three}
            gold={this.state.gold}
            silver={this.state.silver}
            rose={this.state.rose}
            kors={this.state.kors}
            fossil={this.state.fossil}
            women={this.state.women}
          />
          <div className="Container">
            {this.state.kors && this.state.women ? (
              <MK
                watches={Women}
                kors={this.state.kors}
                one={this.state.one}
                two={this.state.two}
                three={this.state.three}
                gold={this.state.gold}
                silver={this.state.silver}
                rose={this.state.rose}
                women={this.state.women}
                men={this.state.men}
              />
            ) : this.state.fossil ? (
              <Fossil
                watches={Women}
                fossil={this.state.fossil}
                one={this.state.one}
                two={this.state.two}
                three={this.state.three}
                gold={this.state.gold}
                silver={this.state.silver}
                rose={this.state.rose}
                women={this.state.women}
                men={this.state.men}
              />
            ) : this.state.one ? (
              <One
                watches={Women}
                one={this.state.one}
                gold={this.state.gold}
                silver={this.state.silver}
                rose={this.state.rose}
                women={this.state.women}
                men={this.state.men}
              />
            ) : this.state.two ? (
              <Two
                watches={Women}
                two={this.state.two}
                gold={this.state.gold}
                silver={this.state.silver}
                rose={this.state.rose}
                women={this.state.women}
                men={this.state.men}
              />
            ) : this.state.three ? (
              <Three
                watches={Women}
                three={this.state.three}
                gold={this.state.gold}
                silver={this.state.silver}
                rose={this.state.rose}
                women={this.state.women}
                men={this.state.men}
              />
            ) : this.state.gold ? (
              <Gold watches={Women} />
            ) : this.state.silver ? (
              <Silver watches={Women} />
            ) : this.state.rose ? (
              <Rose watches={Women} />
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
