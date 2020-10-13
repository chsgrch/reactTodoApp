import React, { Component } from 'react'
import './add-item.css'

export default class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemText: ''
    }
  }
  onChangeInput = (e) => {
    this.setState({
      itemText: e.target.value
    })
  }
  render() {
    const { addTodo } = this.props
    const { itemText } = this.state
    return (
      <div className="add-item" >
        <input
          type="text"
          className="add-item__input form-control search-panel__input"
          value={this.state.itemText}
          onChange={this.onChangeInput}
        />
        <button
          className="add-item__button btn btn-success"
          onClick={() => {
            if (itemText !== '') {
              addTodo(itemText)
            }
          }}
        >Add item</button>
      </div>
    )
  }
}