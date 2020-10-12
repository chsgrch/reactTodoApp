import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import ToDoList from './components/todo-list'

import './index.css'

const todoData = [
  { id: 1, label: "Drinc coffee", important: false },
  { id: 2, label: "Build react app", important: false },
  { id: 3, label: "Have breakfast", important: true }
]

let countImportant = 0;
todoData.forEach(item => {
  if (item.important === true) countImportant++;
})


const App = () => {
  return (
    <div className="app">
      <AppHeader countImportant={countImportant} countAll={todoData.length} />
      <SearchPanel />
      <ToDoList todos={todoData} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
