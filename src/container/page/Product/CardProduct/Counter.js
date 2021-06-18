import React, { Component } from "react";

// redux
import { connect } from "react-redux";

class Counter extends Component {
  //   state = {
  //     order: 1,
  //     name: "Taufik",
  //     jumlah: 1,
  //   };

  // Fungsi untuk mengubah nilai di parent dengan menerima props fungtion
  //   handleCounterChange = (newValue) => {
  //     this.props.onCounterChange(newValue);
  //   };

  // Fungsi penambahan dan pengurangan
  //   handlePlus = () => {
  //     this.setState(
  //       {
  //         order: this.state.order + 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order); // Fungsi untuk mengirim perubahan state
  //       }
  //     );
  //   };

  //   handleMinus = () => {
  //     if (this.state.order > 0) {
  //       this.setState(
  //         {
  //           order: this.state.order - 1,
  //         },
  //         () => {
  //           this.handleCounterChange(this.state.order); // Fungsi untuk mengirim perubahan state
  //         }
  //       );
  //     }
  //   };

  render() {
    console.log("prop dari connect :", this.props);
    return (
      <div>
        <div className="counter">
          <button className="minus" onClick={this.props.handleMinus}>
            {" "}
            -{" "}
          </button>
          <input value={this.props.order} type="text" />
          <button className="plus" onClick={this.props.handlePlus}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    );
  }
}

// global store
const mapStateToProps = (statee) => {
  return {
    order: statee.totalOrder,
    jumlah: statee.value,
  };
};

// fungsi dispatch untuk memanggil reducer
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => {
      dispatch({ type: "PLUS_ORDER" });
    },
    handleMinus: () => {
      dispatch({ type: "MINUS_ORDER" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(stateGlobal,dispatch)(Counter);
// secara otomatis connet membawa dua parameter yang pertama globalStore dan dispach dari provider
