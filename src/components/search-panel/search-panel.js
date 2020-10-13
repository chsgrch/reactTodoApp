import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  changeItem = (e) => {
    this.props.searchTodo(e.target.value);
  };
  render() {
    const customStyle = {
      fontSize: "20px",
    };
    return (
      <div className="search-panel">
        <input
          className="form-control search-panel__input"
          style={customStyle}
          placeholder="search"
          type="text"
          onChange={this.changeItem}
        />
      </div>
    );
  }
}
