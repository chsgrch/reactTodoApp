import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemText: "",
    };
  }
  onChangeInput = (e) => {
    this.setState({
      itemText: e.target.value,
    });
  };
  onSubmit = (e) => {
    const { addTodo } = this.props;
    const { itemText } = this.state;
    if (itemText !== "") {
      addTodo(itemText);
      this.setState({
        itemText: "",
      });
    }
    e.preventDefault();
  };
  render() {
    return (
      <form className="add-item d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="add-item__input form-control search-panel__input"
          value={this.state.itemText}
          onChange={this.onChangeInput}
          placeholder="What`s need to be done"
        />
        <button className="add-item__button btn btn-success">Add item</button>
      </form>
    );
  }
}
