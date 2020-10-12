import React from 'react'

const ItemStatusFilter = () => {
  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-info">All</button>
      <button type="button" class="btn btn-outline-secondary">Active</button>
      <button type="button" class="btn btn-outline-secondary">Done</button>
    </div>
  )
}

export default ItemStatusFilter;