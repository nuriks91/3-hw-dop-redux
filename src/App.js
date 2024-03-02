import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from './store/actions';


function App() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div>
      <h1>Todolist</h1>
      <div>
        <input 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button onClick={handleAddTask}>Add Tusk</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}> 
            <input 
              checked={task.completed} 
              onChange={() => handleToggleTask(task.id)} 
            />
            <button onClick={() => handleDeleteTask(task.id)}>delet</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;