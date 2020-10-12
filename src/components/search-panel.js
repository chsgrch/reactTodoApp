import React from 'react'
import ItemStatusFilter from './item-status-filter'
import "./search-panel.css"

const SearchPanel = () => {
  const customStyle = {
    fontSize: '20px'
  }

  return (
    <div className="search-panel">
      <input className="form-control search-panel__input"
        style={customStyle}
        placeholder='search'
        type='text'
      />
      <ItemStatusFilter />
    </div>
  )
}

export default SearchPanel;