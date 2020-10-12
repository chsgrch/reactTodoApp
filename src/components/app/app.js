import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: props.todoData,
    };
  }
  onChandeTodoData = (changedArr) => {
    this.setState({
      todoData: changedArr,
    });
  };
  render() {
    const { todoData } = this.state;
    let countImportant = 0;
    todoData.forEach((item) => {
      if (item.important === true) countImportant++;
    });

    return (
      <div className="app">
        <AppHeader countImportant={countImportant} countAll={todoData.length} />
        <div className="search-area">
          <SearchPanel className="search-area__panel" />
          <ItemStatusFilter className="search-area__filter" />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={(id) => {
            let changedArray = todoData.filter((el) => el.id !== id);
            this.onChandeTodoData(changedArray);
          }}
        />
      </div>
    );
  }
}
