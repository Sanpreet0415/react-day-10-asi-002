// App.jsx

import React from 'react';
import { useSelector } from 'react-redux'; // Ensure useSelector is imported correctly
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const todos = useSelector(state => state.todos.todos); // Example: accessing todos state from Redux

  return (
    <div>
      <h1>Todo List App</h1>
      <AddTodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
