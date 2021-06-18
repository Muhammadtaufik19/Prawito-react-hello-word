import React, { Component } from "react";
import { connect } from "react-redux";

class LiftCycleComp extends Component {
  render() {
    return (
      <div>
        <h2>Halaman lifecycle</h2>
        <hr />
        <button>Component button</button>
        <hr />
        <p>Total order : {this.props.order}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(LiftCycleComp);
// export default connect(state,dispatch)(LiftCycleComp);
