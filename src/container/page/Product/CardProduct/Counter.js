import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    order: 1,
    name: "Taufik",
  };

  // Fungsi untuk mengubah nilai di parent dengan menerima props fungtion
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  // Fungsi penambahan dan pengurangan
  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order); // Fungsi untuk mengirim perubahan state
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order); // Fungsi untuk mengirim perubahan state
        }
      );
    }
  };

  render() {
    console.log("fungsi handlu :", this.props);
    return (
      <div>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            {" "}
            -{" "}
          </button>
          <input value={this.state.order} type="text" />
          <button className="plus" onClick={this.handlePlus}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    );
  }
}
