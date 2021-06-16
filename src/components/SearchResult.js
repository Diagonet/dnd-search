import React from "react";
export default class SearchResult extends React.Component {
  render() {
    return (
      <div
        className={[
          "search-result",
          this.props.value.concentration && "concentration",
        ].join(" ")}
      >
        <h2>{this.props.value.name}</h2>
        <div>
          <b>Range:</b> {this.props.value.range}
        </div>
        <div>
          <b>Duration:</b> {this.props.value.duration}
        </div>
        <div>
          <b>Description:</b>
          <br />
          {this.props.value.desc}
        </div>
      </div>
    );
  }
}
