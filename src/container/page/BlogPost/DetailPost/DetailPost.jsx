import React, { Component } from "react";
import axios from "axios";

export default class DetailPost extends Component {
  state = {
    post: {
      id: "",
      title: "",
      body: "",
    },
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      console.log(res.data);
      this.setState({
        post: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        <h5>Detial post</h5>
        <hr />
        <div className="p-detail-post">
          <p className="detail-id">{this.state.post.id}</p>
          <p className="detail-title">{this.state.post.title}</p>
          <p className="detail-body">{this.state.post.body}</p>
        </div>
      </div>
    );
  }
}
