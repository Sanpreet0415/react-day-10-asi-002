import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';

const AddTodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodoForm);
