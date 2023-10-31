import React from 'react';
import './App.css'; // Import your CSS file for TodoList
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoList({ todos, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
        <span>{todo.title}</span>
        <button onClick={() => onDelete(todo.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
      ))}
    </ul>
  );
}

export default TodoList;