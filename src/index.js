import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
// import { CSSTransition } from "react-transition-group";
import Logo from "./components/Logo";
import SearchResult from "./components/SearchResult";
import Button from "./components/Button";
import MultipleSearchResults from "./components/MultipleSearchResults";
import ErrorMessage from "./components/ErrorMessage";
import ImgLogo from "./components/ImgLogo";
import SpellLevel from "./components/SpellLevel";

const Search = () => {
  const [searchBox, setSearch] = useState(null);
  const [multipleResults, setMultipleResults] = useState(false);
  const [theResult, setTheResult] = useState(null);
  const [noResult, setNoResult] = useState(null);
  const [selectData, setSelectData] = useState(null);
  // const [showSingle, setShowSingle] = useState(false);

  const searching = () => {
    const baseURL = "https://www.dnd5eapi.co/api/spells/";
    console.log(selectData);
    axios
      .get(baseURL, { params: { name: searchBox, level: selectData } })
      .then((res) => {
        console.log(res.data);
        if (res.data.count > 1) {
          // for when the search returns multiple results
          setNoResult(false);
          setTheResult(null);
          setMultipleResults(res.data);
          // setShowSingle(true);
        } else if (res.data.count === 1) {
          // only one result? API call again to get actual info
          setNoResult(false);
          setMultipleResults(null);
          exactSearch(res.data.results[0].url);
        } else if (res.data.count === 0) {
          // no results, display message
          setTheResult(null);
          setMultipleResults(null);
          setNoResult(true);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const exactSearch = (url) => {
    axios.get("https://www.dnd5eapi.co" + url).then((res) => {
      setMultipleResults(null);
      console.log(res.data);
      setTheResult(res.data);
    });
  };
  const resetSearch = () => {
    setMultipleResults(null);
    setTheResult(null);
    setNoResult(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searching();
    }
  };

  const getData = (text) => {
    setSearch(text.target.value.toLowerCase().split(" ").join("+"));
  };

  const getSelectData = (value) => {
    value.target.value === "-1"
      ? setSelectData(null)
      : setSelectData(value.target.value);
  };

  return (
    <div>
      <div
        className={[
          "search-box",
          !(noResult || theResult || multipleResults) && "centered",
        ].join(" ")}
      >
        {(noResult || theResult || multipleResults) && (
          <Logo onClick={resetSearch} />
        )}
        {!(noResult || theResult || multipleResults) && <ImgLogo />}
        <SpellLevel onChange={getSelectData} />
        <input type="text" onChange={getData} onKeyPress={handleKeyPress} />
        <Button onClick={searching} />
      </div>
      <div className="results-box">
        {theResult && <SearchResult value={theResult} />}

        {/* <CSSTransition
          in={showSingle}
          classNames="animation"
          timeout={500}
          unmountOnExit
        > */}
        {multipleResults && (
          <MultipleSearchResults
            value={multipleResults}
            onClick={exactSearch}
          />
        )}
        {/* </CSSTransition> */}

        {noResult && <ErrorMessage />}
      </div>
    </div>
  );
};

export default Search;

ReactDOM.render(<Search />, document.getElementById("root"));
