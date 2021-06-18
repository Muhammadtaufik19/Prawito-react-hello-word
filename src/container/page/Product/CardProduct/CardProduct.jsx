import React, { Component, Fragment } from "react";
import Counter from "./Counter";

// style
// import "../Product/Product.css";

// image
import logo from "../../../../assets/images/logo.jpg";
import troly from "../../../../assets/images/troly.jpg";
import ayam from "../../../../assets/images/ayam.jpg";

export default class CardProduct extends Component {
  // state = {
  //   order: 1,
  //   name: "Taufik",
  // };

  // Fungsi untuk mengubah nilai di parent dengan menerima props fungtion
  // handleCounterChange = (newValue) => {
  //   this.props.onCounterChange(newValue);
  // };

  // Fungsi penambahan dan pengurangan
  // handlePlus = () => {
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChange(this.state.order); // Fungsi untuk mengirim perubahan state
  //     }
  //   );
  // };

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order); // Fungsi untuk mengirim perubahan state
  //       }
  //     );
  //   }
  // };

  render() {
    return (
      <div>
        <div className="card">
          <div className="img-thumb-prod">
            <img src={ayam} alt="img-thum" />
          </div>
          <p className="product-title">Daging ayam</p>
          <p className="product-price">Rp 50.000</p>
          <Counter />
          {/* <div className="counter">
            <button className="minus" onClick={this.handleMinus}>
              {" "}
              -{" "}
            </button>
            <input value={this.state.order} type="text" />
            <button className="plus" onClick={this.handlePlus}>
              {" "}
              +{" "}
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}
