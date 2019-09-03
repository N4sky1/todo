import React from 'react';

import TodoListItem from '../todo-list-tem';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {

  let elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          {...itemProps } 
          onDeleted={()=> onDeleted(id)}
          onToggleDone={()=>onToggleDone(id)}
          onToggleImportant={()=>onToggleImportant(id)}/>
      </li>
    );
  });
  
  return (
    <ul className="todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;