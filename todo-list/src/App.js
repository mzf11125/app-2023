import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css'; // Import your CSS file

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([...todos, newTodo]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
