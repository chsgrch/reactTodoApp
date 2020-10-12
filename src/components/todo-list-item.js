import React from 'react'
import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {
  const liStyle = {
    color: important ? '#3184bd' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  }
  return (
    <div className="todo-list-item">
      <span
        className="todo-list-item__label" style={liStyle}>
        {label}
      </span>
      <div className="todo-list-item__button-area">
        <button type='button' class='btn btn-outline-danger todo-list-item__button'>
          <i class="fa fa-trash"></i>
        </button>
        <button type='button' class='btn btn-outline-success todo-list-item__button'>
          <i class="fa fa-exclamation" />
        </button>
      </div>
    </div>
  )
}

export default TodoListItem;