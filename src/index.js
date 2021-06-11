import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text"></input>
        <button>Search</button>
      </div>
    );
  }
}
ReactDOM.render(<Search />, document.getElementById("root"));
