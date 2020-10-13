import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import AddItem from "../add-item"

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
      ]
    };
  }

  createTodoItem = (label) => {
    return {
      id: this.maxId++,
      label: label,
      important: false,
      done: false
    }
  }

  getCountImportant = () => {
    let newArray = this.state.todoData.filter(el => el.important === true)
    return newArray.length
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return {
        todoData: newArray
      }
    })
  }

  addItem = (itemText) => {
    const newItem = this.createTodoItem(itemText)

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem]
      return {
        todoData: newArray
      }
    })
  }

  onChangeDone = (id) => {
    const newArray = [...this.state.todoData];
    const idx = newArray.findIndex(el => {
      return el.id === id
    })
    newArray[idx].done = !newArray[idx].done;
    this.setState(({ todoData }) => {
      return {
        todoData: newArray
      }
    })
  }

  onChangeImportant = (id) => {
    console.log(`Important change, ${id}`)
    const newArray = [...this.state.todoData];
    const idx = newArray.findIndex(el => {
      return el.id === id
    })
    newArray[idx].important = !newArray[idx].important;
    this.setState(({ todoData }) => {
      return {
        todoData: newArray
      }
    })
  }

  render() {
    const { todoData } = this.state;
    return (
      <div className="app">
        <AppHeader countImportant={this.getCountImportant()} countAll={todoData.length} />
        <div className="search-area">
          <SearchPanel className="search-area__panel" />
          <ItemStatusFilter className="search-area__filter" />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={(id) => this.deleteItem(id)}
          // onChangeImportant={(id, important) => this.onChangeImportant(id, important)}
          changeDone={(id) => this.onChangeDone(id)}
          changeImportant={(id) => this.onChangeImportant(id)}
        />
        <AddItem addTodo={(itemText) => this.addItem(itemText)} />
      </div>
    );
  }
}
