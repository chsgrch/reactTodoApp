import React, { Component } from "react";

export default class ItemStatusFilter extends Component {


  buttonsArray = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
    { name: 'important', label: 'Important' }
  ];

  render() {
    const { onFilter, filterName } = this.props;
    const buttons = this.buttonsArray.map(({ name, label }) => {
      console.log(typeof (name))
      const isActive = filterName === name
      const clazz = isActive ? "btn btn-info" : "btn btn-outline-secondary"
      return (
        <button
          key={JSON.stringify(name)}
          type="button"
          onClick={() => onFilter(name)}
          className={clazz}>
          {label}
        </button>
      );
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
