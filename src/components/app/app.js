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
      searchText: '',
      filterName: 'all',
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

  onSearchTodo = (arr, text) => {
    if (text.length === 0) return arr;
    return arr.filter((el) => {
      return el.label.toLowerCase().indexOf(text.toLowerCase()) > -1
    })
  };

  onFilter = (arr, filterName) => {
    switch (filterName) {
      case 'all':
        return arr;

      case 'active':
        return arr.filter((el) => el.done === false);

      case 'done':
        return arr.filter((el) => el.done === true);

      case 'important':
        return arr.filter((el) => el.important === true);

      default:
        return arr;
    }
  }

  onChangeFilterName = (filterName) => {
    this.setState({ filterName })
  }

  onChangeSearchText = (searchText) => {
    this.setState({ searchText })
  }

  render() {
    const { todoData, searchText, filterName } = this.state;

    const doneCount = todoData.filter((el) => {
      return el.done === true;
    }).length;
    const todoCount = todoData.length - doneCount;

    const visibleItems = this.onFilter(
      this.onSearchTodo(todoData, searchText),
      filterName)

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
            changeSearchText={(text) => this.onChangeSearchText(text)}
          />
          <ItemStatusFilter
            className="search-area__filter"
            onFilter={(filterName) => this.onChangeFilterName(filterName)}
            filterName={filterName}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={(id) => this.deleteItem(id)}
          changeDone={(id) => this.onChangeDone(id)}
          changeImportant={(id) => this.onChangeImportant(id)}
        />
        <AddItem addTodo={(itemText) => this.addItem(itemText)} />
      </div>
    );
  }
}
