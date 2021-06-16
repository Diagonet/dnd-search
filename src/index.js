import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import Logo from "./components/Logo";
// import apiTest from "./testAPI";
// import apiMultiple from "./testMultiple";
import SearchResult from "./components/SearchResult";
import Button from "./components/Button";
import MultipleSearchResults from "./components/MultipleSearchResults";

// const testAPI = apiTest();
// const multiple = apiMultiple();

const Search = () => {
  const [searchBox, setSearch] = useState(null);
  const [multipleResults, setMultipleResults] = useState(null);
  const [theResult, setTheResult] = useState(null);

  const searching = () => {
    const baseURL = "https://www.dnd5eapi.co/api/spells/";
    axios
      .get(baseURL + "?name=" + searchBox)
      .then((res) => {
        console.log(res.data);
        if (res.data.count > 1) {
          // for when the search returns multiple results
          setTheResult(null);
          setMultipleResults(res.data);
        } else if (res.data.count === 1) {
          exactSearch(res.data.results[0].url);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log(searchBox);
  };

  const exactSearch = (url) => {
    axios.get("https://www.dnd5eapi.co" + url).then((res) => {
      setMultipleResults(null);
      console.log(res.data);
      setTheResult(res.data);
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searching();
    }
  };

  const getData = (text) => {
    setSearch(text.target.value.toLowerCase().split(" ").join("+"));
  };
  return (
    <div>
      <div className="search-box">
        <Logo />
        <input type="text" onChange={getData} onKeyPress={handleKeyPress} />
        <Button onClick={searching} />
      </div>
      <div className="results-box">
        {theResult ? <SearchResult value={theResult} /> : ""}
        {multipleResults ? (
          <MultipleSearchResults
            value={multipleResults}
            onClick={exactSearch}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;

ReactDOM.render(<Search />, document.getElementById("root"));
