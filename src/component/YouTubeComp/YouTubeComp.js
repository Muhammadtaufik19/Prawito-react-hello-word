import React from "react";

import "./YouTubeComp.css";

import foto from "../../assets/images/thumb.jpg";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src={foto} />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

// Defaul Props
YouTubeComp.defaultProps = {
  time: "00.00",
  title: "Title Here",
  desc: "Desc Here",
};

export default YouTubeComp;
