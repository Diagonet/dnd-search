import { useState } from "react";
import { BsBook } from "react-icons/bs";

const SearchResult = (props) => {
  const [grow, setGrow] = useState(false);
  const growIt = () => {
    setGrow(!grow);
  };
  return (
    <div
      className={[
        "search-result",
        props.value.concentration && "concentration",
        grow && "grow",
      ].join(" ")}
      onClick={growIt}
    >
      <div>
        <p className={["spellLevel", grow && "spellLevelGrow"].join(" ")}>
          {props.value.level}
        </p>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <h2 style={{ display: "inline" }}>{props.value.name}</h2>
        {props.value.ritual && (
          <BsBook style={{ display: "inline", marginLeft: "10px" }} />
        )}
      </div>
      <div>
        <b>Casting Time:</b> {props.value.casting_time}
      </div>
      <div>
        <b>Components:</b> {props.value.components.join(", ")}
      </div>
      {props.value.components.includes("M") && (
        <div>
          <b>Materials:</b> {props.value.material}
        </div>
      )}
      <div>
        <b>Range:</b> {props.value.range}
      </div>
      <div>
        <b>Duration:</b> {props.value.duration}
      </div>
      <div>
        <b>Description:</b>
        <br />
        {props.value.desc}
      </div>
      {grow && props.value.hasOwnProperty("higher_level") && (
        <div>
          <b>Casting at Higher Levels:</b> {props.value.higher_level}{" "}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
// import React from "react";
// export default class SearchResult extends React.Component {
//   render() {
//     return (
//       <div
//         className={[
//           "search-result",
//           this.props.value.concentration && "concentration",
//         ].join(" ")}
//       >
//         <div>
//           <p className={"spellLevel"}>{this.props.value.level}</p>
//         </div>
//         <h2>{this.props.value.name}</h2>
//         <div>
//           <b>Range:</b> {this.props.value.range}
//         </div>
//         <div>
//           <b>Duration:</b> {this.props.value.duration}
//         </div>
//         <div>
//           <b>Description:</b>
//           <br />
//           {this.props.value.desc}
//         </div>
//       </div>
//     );
//   }
// }
