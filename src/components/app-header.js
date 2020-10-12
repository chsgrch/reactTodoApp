import React from 'react'
import './app-header.css'

const AppHeader = (props) => {
  return (
    <div className="app-header">
      <h1 className="app-header__header-text">My ToDo List</h1>
      <p className="app-header__info">{props.countImportant} more todo, {props.countAll} done</p>
    </div>
  )
}

export default AppHeader;