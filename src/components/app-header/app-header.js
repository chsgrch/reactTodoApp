import React from "react";
import "./app-header.css";

const AppHeader = ({ countImportant, countAll }) => {
  return (
    <div className="app-header">
      <h1 className="app-header__header-text">My ToDo List</h1>
      <p className="app-header__info">
        {countImportant} more todo, {countAll} done
      </p>
    </div>
  );
};

export default AppHeader;
