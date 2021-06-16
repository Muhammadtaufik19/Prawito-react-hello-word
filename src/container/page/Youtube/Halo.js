import React from "react";
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp";

export default function Halo() {
  return (
    <div>
      <h5>Halo Youtube Component</h5>
      <hr />
      <YouTubeComp time="7.12" title="React js bagian 1" desc="10x di tonton" />
      <YouTubeComp time="8.12" title="React js bagian 2" desc="12x di tonton" />
      <YouTubeComp time="9.12" title="React js bagian 3" desc="20x di tonton" />
      <YouTubeComp
        time="10.12"
        title="React js bagian 4"
        desc="30x di tonton"
      />
    </div>
  );
}
