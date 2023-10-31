// TodoList.js
//File that hqndles the list of todos
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
