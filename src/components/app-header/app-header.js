import React, { Component } from "react";
import "./app-header.css";

export default class AppHeader extends Component {
  render() {
    let { countAll, countImportant } = this.props;
    return (
      <div className="app-header">
        <h1 className="app-header__header-text">My ToDo List</h1>
        <p className="app-header__info">
          {countImportant} important todo, tasks {countAll}
        </p>
      </div>
    )
  }
}