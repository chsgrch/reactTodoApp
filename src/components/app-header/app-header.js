import React, { Component } from "react";
import "./app-header.css";

export default class AppHeader extends Component {
  render() {
    let { countAll, countImportant, todoCount, doneCount } = this.props;
    return (
      <div className="app-header">
        <h1 className="app-header__header-text">My ToDo List</h1>
        <div className="app-header__info">
          <p className="app-header__info-important">
            {countImportant} important todo, tasks {countAll}
          </p>
          <p className="app-header__info-done">
            {todoCount} more todo, {doneCount} done
          </p>
        </div>
      </div>
    );
  }
}
