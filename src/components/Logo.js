import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo" onClick={() => this.props.onClick()}>
        DnD <span style={{ color: "white" }}>Search</span>
      </div>
    );
  }
}
