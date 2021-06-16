import React, { Component } from "react";
// import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Parent from "../../example/Parent/Parent";
import Product from "../Product/Product";
import Child from "../../example/child/Child";
import LiftCycleComp from "../page/LiftCycleComp/LiftCycleComp";
import BlogPost from "../page/BlogPost/BlogPost";
import Youtu from "../page/Youtube/Youtu";
import Halo from "../page/Youtube/Halo";
import "./Home.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Router>
        <>
          <button className="navigation">
            <Link to="/">Blog Post</Link>
          </button>
          <button className="navigation">
            <Link to="/product">Product</Link>
          </button>
          <button className="navigation">
            <Link to="/lifecycle">LifeCycle React</Link>
          </button>
          <button className="navigation">
            <Link to="/halo"> Halo Youtube</Link>
          </button>
          <Route path="/" exact component={BlogPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LiftCycleComp} />
          <Route path="/halo" component={Halo} />
        </>
      </Router>
    );
  }
}
