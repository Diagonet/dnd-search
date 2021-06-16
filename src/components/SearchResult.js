import React from "react";
export default class SearchResult extends React.Component {
  render() {
    return (
      <div className="search-result">
        <h2>{this.props.value.name}</h2>
        <div>
          <b>Range:</b> {this.props.value.range}
        </div>
        <div>
          <b>Description:</b> {this.props.value.desc}
        </div>
      </div>
    );
  }
}

