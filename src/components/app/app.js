import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import AddItem from "../add-item";

import "./app.css";

export default class App extends Component {
  maxId = 0;

  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        this.createTodoItem("Drinc coffee"),
        this.createTodoItem("Build react app"),
        this.createTodoItem("Have breakfast"),
      ],
      filteredArray: [],
      filter: false,
    };
  }

  createTodoItem = (label) => {
    return {
      id: this.maxId++,
      label: label,
      important: false,
      done: false,
    };
  };

  getCountImportant = () => {
    let newArray = this.state.todoData.filter((el) => el.important === true);
    return newArray.length;
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (itemText) => {
    const newItem = this.createTodoItem(itemText);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  onChangeProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => {
      return el.id === id;
    });
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onChangeDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onChangeProperty(todoData, id, "done"),
      };
    });
  };

  onChangeImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onChangeProperty(todoData, id, "important"),
      };
    });
  };

  onSearchTodo = (text) => {
    if (text.length === 0) {
      this.setState(({ filteredArray, filter }) => {
        return {
          filteredArray: [],
          filter: false,
        };
      });
    } else {
      this.setState(({ todoData, filteredArray, filter }) => {
        return {
          filteredArray: todoData.filter((el) => {
            return el.label.toLowerCase().indexOf(text.toLowerCase()) >= 0;
          }),
          filter: true,
        };
      });
    }
  };

  render() {
    const { todoData, filteredArray } = this.state;

    const doneCount = todoData.filter((el) => {
      return el.done === true;
    }).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="app">
        <AppHeader
          countImportant={this.getCountImportant()}
          countAll={todoData.length}
          doneCount={doneCount}
          todoCount={todoCount}
        />
        <div className="search-area">
          <SearchPanel
            className="search-area__panel"
            searchTodo={(text) => this.onSearchTodo(text)}
          />
          <ItemStatusFilter className="search-area__filter" />
        </div>
        <TodoList
          todos={this.state.filter ? filteredArray : todoData}
          onDeleted={(id) => this.deleteItem(id)}
          changeDone={(id) => this.onChangeDone(id)}
          changeImportant={(id) => this.onChangeImportant(id)}
        />
        <AddItem addTodo={(itemText) => this.addItem(itemText)} />
      </div>
    );
  }
}
