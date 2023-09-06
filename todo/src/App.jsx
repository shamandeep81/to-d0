// App.js
import React, { useState } from 'react';
import './App.css'; // Import the main CSS file
import TaskForm from './Components/TaskForm'; // Import the TaskForm component
import TaskList from './Components/TaskList';
import TaskCard from './Components/TaskCard';

function App() {
  // Define a state to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Define a function to add a new task to the list
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TaskForm onAdd={addTask} /> {/* Render the TaskForm component */}

      <TaskCard tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
