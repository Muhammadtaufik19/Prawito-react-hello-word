import React, { Component } from "react";
import Child from "../child/Child";

export default class Parent extends Component {
  // Component Parent dan Child harus ada state
  state = {
    makanan: "Bakso",
    jumlah: 2,
  };

  // Fungsi untuk menerima nilai state terbaru dari component child
  counterChange = (newValue) => {
    this.setState({
      jumlah: newValue,
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Contoh mengubah state di PARENT dengan component CHILD</h3>
        <h4>Ini adallah Parent, Jumlah pesanan anda : {this.state.jumlah}</h4>
        <Child onCounterChange={(newValue) => this.counterChange(newValue)} />
      </div>
    );
  }
}
