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
import rootReducer from "./redux/Reducer/GlobalReducer";

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
