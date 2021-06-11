import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import Logo from "./components/logo";
import apiTest from "./testAPI";
import SearchResult from "./components/searchresult";

const testAPI = apiTest();
console.log(testAPI);

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="search-box">
          <Logo />
          <input type="text"></input>
          <button>Search</button>
        </div>
        <div className="results-box">
          <SearchResult value={testAPI} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Search />, document.getElementById("root"));
