import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// // Routing sendiri
// import YouTubeComp from "./component/YouTubeComp/YouTubeComp";
import Home from "./container/Home/Home";
// import Parent from "./example/Parent/Parent";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Home />
      {/* <App /> */}
      {/* <Parent /> */}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
