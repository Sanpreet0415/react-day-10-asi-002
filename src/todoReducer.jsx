// Initial state for todos
const initialState = {
    todos: [
      { id: '1', title: 'Learn React', status: false },
      { id: '2', title: 'Redux Integration', status: false },
      { id: '3', title: 'Build Todo App', status: true }
    ]
  };
  
  // Reducer function
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, status: !todo.status } : todo
          )
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  