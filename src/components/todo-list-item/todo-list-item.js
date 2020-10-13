import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, done, important,
      changeDone,
      changeImportant } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <div className={classNames}>
        <span className="todo-list-item__label" onClick={changeDone}>
          {label}
        </span>

        <div className="todo-list-item__button-area">
          <button
            type="button"
            className="btn btn-outline-danger todo-list-item__button"
            onClick={onDeleted}
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-success todo-list-item__button"
            onClick={changeImportant}
          >
            <i className="fa fa-exclamation" />
          </button>
        </div>
      </div>
    );
  }
}
