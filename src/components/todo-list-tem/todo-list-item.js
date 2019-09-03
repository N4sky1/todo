import React from 'react';
import importantSign from './warning-sign.svg'
import trash from './garbage.svg'
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
  
  render() {
    const { label, onDeleted, 
            onToggleImportant, 
            onToggleDone,
            done, important } = this.props

    let classNames = 'todo-list-item'
    if (done) { classNames += ' done' }
    if (important) { classNames += ' important' }
  
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>
  
        <button type="button"
                className="toggle"
                onClick={onToggleImportant}>
          <img src={importantSign}/>
        </button>
  
        <button type="button"
                className="toggle"
                onClick={onDeleted}>
          <img src={trash}/>
        </button>
      </span>
    );
  }
}

