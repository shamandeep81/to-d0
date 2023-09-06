// TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.text}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
