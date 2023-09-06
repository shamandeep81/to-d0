import React, { useState } from 'react';
import TaskCard from './TaskCard'; 
import './TaskForm.css';

const TaskForm = () => {
  const [cardList, setCardList] = useState([]); // Store a list of cards
  const [taskText, setTaskText] = useState('');

  const addTaskCard = () => {
    // Create a new card with an empty task list
    setCardList([...cardList, []]);
  };

  const addTaskToCard = (cardIndex) => {
    if (taskText.trim() !== '') {
      const updatedCardList = [...cardList];
      updatedCardList[cardIndex].push({ text: taskText });
      setCardList(updatedCardList);
      setTaskText('');
    }
  };

  return (
    <div className="task-form">
      <button onClick={addTaskCard}>Create New Card</button>
      {/* <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      /> */}
      {/* <button onClick={() => addTaskToCard(cardList.length - 1)}>Add</button> */}
      <div className="task-cards">
        {cardList.map((cardTasks, index) => (
          <TaskCard key={index} tasks={cardTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskForm;
