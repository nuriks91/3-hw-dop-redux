export const addTask = (description) => ({
    type: 'add task',
    payload: {
      description,
      completed: false,
      id: new Date().getTime().toString()
    }
  });
  
  export const deleteTask = (taskId) => ({
    type: 'delete task',
    payload: {
      id: taskId
    }
  });
  
  export const toggleTask = (taskId) => ({
    type: 'change task',
    payload: {
      id: taskId
    }
  });
