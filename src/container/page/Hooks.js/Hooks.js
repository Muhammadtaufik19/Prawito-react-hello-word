import React, { Component, useState, useEffect } from "react";
import "./Hooks.css";

// export default class Hooks extends Component {
//   state = {
//     count: 0,
//   };

//   countUpdate = () => {
//     this.setState({
//       //   ...this.state,
//       count: this.state.count + 1,
//     });
//   };

//   componentDidMount() {
//     document.title = `Title Count : ${this.state.count}`;
//   }

//   componentDidUpdate() {
//     document.title = `Title Count : ${this.state.count}`;
//   }

//   componentWillUnmount() {
//     document.title = `React Hello word`;
//   }

//   render() {
//     return (
//       <div>
//         <div className="p-hooks">
//           <hr />
//           <p>Nilai saat ini adalah : {this.state.count}</p>
//           <button onClick={this.countUpdate}>Update Nilai</button>
//         </div>
//       </div>
//     );
//   }
// }

export default function Hooks() {
  const [count, setCount] = useState(0);

  //   side effect atau lifecycle
  useEffect(() => {
    document.title = `Title Change : ${count}`;
    return () => {
      document.title = `React Hello Word`;
    };
  });
  return (
    <div>
      <div className="p-hooks">
        <hr />
        <p>Nilai saat ini adalah : {count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Update Nilai
        </button>
      </div>
    </div>
  );
}
