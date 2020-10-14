import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }
  changeItem = (e) => {
    const value = e.target.value;
    this.setState(
      { searchText: value }
    )
    this.props.changeSearchText(value)
  };
  render() {
    const { searchText } = this.state;
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
          value={searchText}
          onChange={this.changeItem}
        />
      </div>
    );
  }
}
