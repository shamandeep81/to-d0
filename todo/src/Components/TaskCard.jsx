// TaskCard.js
import React, { useEffect, useState } from 'react';
import './TaskCard.css';

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  // Load tasks from Local Storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to Local Storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText }]);
      setTaskText('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-card">
      <h2>Task List</h2>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {index + 1}. {task.text}
            <button onClick={() => deleteTask(index)}>Del</button>
          </li>
        ))}
      </ol>
      <div className="task-form">
        <input
          type="text"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  );
};

export default TaskCard;
