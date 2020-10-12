import React from 'react'
import TodoListItem from '../components/todo-list-item'
import './todo-list.css'

const ToDoList = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...propsItem } = item
    return (
      <li className='list-group-item' key={id}>
        <TodoListItem {...propsItem} />
      </li>
    )
  })

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  )
}

export default ToDoList;