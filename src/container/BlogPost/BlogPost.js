import React, { Component } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";
import "./BlogPost.css";

export default class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      useeId: 1,
    },
    isUpdate: false,
  };

  // Fungsi merelode / memanggil API
  getPostAPI = () => {
    axios
      .get(`http://localhost:3004/posts?_sort=id&_order=desc`)
      .then((result) => {
        // console.log(result.data.manga_list[5]);
        this.setState({
          post: result.data,
        });
      });
  };

  // fungsi POST / menambahkan data
  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
      },
      (err) => {
        console.log("err : ", err);
      }
    );
  };

  putDataToAPI = (data) => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((res) => {
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            useeId: 1,
          },
        });
      });
  };

  // fungsi delate
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  // fungsi update
  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  // fungsi handle form
  handleFormChange = (eve) => {
    // console.log("form change", eve.target.name);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let tempstmp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = tempstmp;
    }
    // masih agak bingung
    formBlogPostNew[eve.target.name] = eve.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
      this.setState({
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          useeId: 1,
        },
      });
    }
  };

  // Pemanggilan Fake API dengan "fetch" dan "axios"
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((jsonn) => {
    //     this.setState({
    //       post: jsonn,
    //     });
    //   });
    axios.get("http://localhost:3004/posts").then((result) => {
      // console.log(result.data.manga_list[5]);
      this.getPostAPI();
    });
  }
  render() {
    return (
      <>
        <h2>Halaman Blog Post</h2>
        <hr />
        <p className="section-title">Blogpost</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.formBlogPost.title}
            placeholder="Add Title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={this.state.formBlogPost.body}
            placeholder="Add blog content"
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            {this.state.isUpdate ? "Update Data" : "Simpan"}
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
            />
          );
        })}
      </>
    );
  }
}
