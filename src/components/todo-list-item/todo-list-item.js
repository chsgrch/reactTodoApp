import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false,
    };
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };
  onButtoneExclamationClick = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <div className={classNames}>
        <span className="todo-list-item__label" onClick={this.onLabelClick}>
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
            onClick={this.onButtoneExclamationClick}
          >
            <i className="fa fa-exclamation" />
          </button>
        </div>
      </div>
    );
  }
}
