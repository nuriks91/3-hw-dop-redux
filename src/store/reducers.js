const initialState = {
    tasks: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'add task':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'delete task':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload.id)
        };
      case 'changae task':
        return {
          ...state,
          tasks: state.tasks.map(task => 
            task.id === action.payload.id ? { ...task, completed: !task.completed } : task
          )
        };
      default:
        return state;
    }
  };
  
  export default reducer;