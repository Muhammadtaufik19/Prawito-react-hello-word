import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// // Routing sendiri
// import YouTubeComp from "./component/YouTubeComp/YouTubeComp";
import Home from "./container/Home/Home";
// import Parent from "./example/Parent/Parent";

// Management state dengan redux ____________________________________________________
import { createStore } from "redux";
import { Provider } from "react-redux";

// State global
const globalState = {
  totalOrder: 1,
  value: 5,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === "PLUS_ORDER") {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
      value: state.value + 1,
    };
  }
  if (action.type === "MINUS_ORDER") {
    let totalOrderMinim = 0;
    if (state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1,
        value: state.value - 1,
      };
    }
    return {
      totalOrder: totalOrderMinim,
    };
  }
  return state;
};

// Store global
const storeRedux = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Provider store={storeRedux}>
        <Home />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
