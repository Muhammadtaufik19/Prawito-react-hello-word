import React, { Component, Fragment } from "react";

// style
import "./Product.css";

// image
import logo from "../../assets/images/logo.jpg";
import troly from "../../assets/images/troly.jpg";
import ayam from "../../assets/images/ayam.jpg";
import CardProduct from "../CardProduct/CardProduct";

export default class Product extends Component {
  state = {
    order: 1,
    name: "Taufik",
  };

  // Fungsi
  // Props "onCounterChange" dikirim ke child
  handleCounterChange = (newValueTes) => {
    this.setState({
      order: newValueTes, // perubahan yang dikirim
    });
  };

  //   Induk
  //   render
  render() {
    return (
      <div>
        <h2>Halaman Product</h2>
        <hr />
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="troley">
            <img src={troly} alt="troly" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </div>
    );
  }
}
