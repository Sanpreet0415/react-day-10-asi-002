import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/actions/todoActions';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.status ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
