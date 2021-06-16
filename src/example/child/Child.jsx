import React, { Component } from "react";

// import "../child/Child.css";
// CSS nya tidak berubah

export default class Child extends Component {
  state = {
    jumlah: 2,
    makanan: "Bakso",
  };

  // Fungsi untuk mengirim nilai state terbaru ke PARENT
  counterChange = (kiriman) => {
    this.props.onCounterChange(kiriman);
  };

  // Fungsi penambahan dan pengurangan
  minus = () => {
    if (this.state.jumlah > 1) {
      this.setState(
        {
          jumlah: this.state.jumlah - 1,
        },
        () => {
          this.counterChange(this.state.jumlah);
        }
      );
    }
  };

  plus = () => {
    this.setState(
      {
        jumlah: this.state.jumlah + 1,
      },
      () => {
        this.counterChange(this.state.jumlah);
      }
    );
  };

  // ================================
  render() {
    return (
      <div>
        <div>
          <p className="product-title"> Pesanan : {this.state.makanan}</p>
          {/* <p className="product-price"> Jumlah : {this.state.jumlah}</p> */}
          <div className="counter">
            <button className="minus" onClick={this.minus}>
              {" "}
              -{" "}
            </button>
            <input value={this.state.jumlah} type="text" />
            <button className="plus" onClick={this.plus}>
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
