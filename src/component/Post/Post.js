import React from "react";

export default function Post(props) {
  // console.log("ini", props);
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/200/tech/sepia" alt="dummy" />
      </div>
      <div className="content">
        <p className="id">ID ke : {props.data.id}</p>
        <p className="title">{props.data.title}</p>
        <p className="decs">{props.data.body}</p>
        <button
          className="remove"
          onClick={() => {
            props.remove(props.data.id);
          }}
        >
          Remove
        </button>
        <button
          className="update"
          onClick={() => {
            props.update(props.data);
          }}
        >
          update
        </button>
      </div>
    </div>
  );
}
