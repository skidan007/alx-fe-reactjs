import React, { useState } from 'react';

// Initial static array of todos
const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Write Tests', completed: true },
  { id: 3, text: 'Ship It!', completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState('');

  // --- Handler for adding a new todo ---
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return; // Prevent adding empty todos

    const newTodo = {
      id: Date.now(), // Simple unique ID
      text: newTodoText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText(''); // Clear the input field
  };

  // --- Handler for toggling completion status ---
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // --- Handler for deleting a todo ---
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List 📝</h1>

      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Todo List */}
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px 0',
            }}
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent li's onClick from firing
                handleDeleteTodo(todo.id);
              }}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;