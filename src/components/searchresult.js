import React from "react";
export default class SearchResult extends React.Component {
  render() {
    return (
      <div className="search-result">
        <div>{this.props.value.name}</div>
        <div>Range: {this.props.value.range}</div>
        <div>Description: {this.props.value.desc}</div>
      </div>
    );
  }
}
