import React, { Component } from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Parent from "../../example/Parent/Parent";
import Product from "../Product/Product";
import Child from "../../example/child/Child";
import LiftCycleComp from "../page/LiftCycleComp/LiftCycleComp";
import BlogPost from "../BlogPost/BlogPost";
import "./Home.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Router>
        {/* <div>
          <h1>YouTubeComp</h1>
          <hr></hr>
          <YouTubeComp
            time="7.12"
            title="React js bagian 1"
            desc="10x di tonton"
          />
          <YouTubeComp
            time="8.12"
            title="React js bagian 2"
            desc="12x di tonton"
          />
          <YouTubeComp
            time="9.12"
            title="React js bagian 3"
            desc="20x di tonton"
          />
          <YouTubeComp
            time="10.12"
            title="React js bagian 4"
            desc="30x di tonton"
          />
          <YouTubeComp />
          <h1>PRODUCT</h1>
          <hr />
          <Product />
          <hr />
          <Parent />
        <Child />
          <p>Life cycle component</p>
          <hr />
          <LiftCycleComp />
          <p>Blog post</p>
          <hr />
          <BlogPost />
        </div> */}

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
          <Route path="/" exact component={BlogPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LiftCycleComp} />
        </>
      </Router>
    );
  }
}
