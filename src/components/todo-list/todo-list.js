import React from "react";
import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const ToDoList = ({ todos, onDeleted, changeDone, changeImportant }) => {
  const elements = todos.map((item) => {
    const { id, ...propsItem } = item;
    return (
      <li className="list-group-item" key={id}>
        <TodoListItem {...propsItem}
          onDeleted={() => onDeleted(id)}
          done={item.done}
          changeDone={() => { changeDone(id) }}
          important={item.important}
          changeImportant={() => changeImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default ToDoList;
