// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Action creators
export const addTodo = (title, status = false) => ({
  type: ADD_TODO,
  payload: {
    id: Math.random().toString(36).substr(2, 9), // Unique ID generation
    title,
    status
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});
