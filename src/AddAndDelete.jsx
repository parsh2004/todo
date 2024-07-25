import React, { useState } from 'react';
import './AddAndDelete.css';

const AddAndDelete = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddOrEditTask = (event) => {
    event.preventDefault();
    if (input.trim()) {
      if (isEditing) {
        const updatedTasks = tasks.map((task, index) =>
          index === currentTaskIndex ? input.trim() : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        setTasks([...tasks, input.trim()]);
      }
      setInput('');
    }
  };

  const handleEditTask = (index) => {
    setInput(tasks[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="title">SPYCRAFT SCHEDULER</h1>
      <form onSubmit={handleAddOrEditTask} className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add or edit a task"
          className="task-input"
        />
        <button type="submit" className="add-button">
          {isEditing ? 'Update' : 'Add Task'}
        </button>
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <div className="task-buttons">
              <button onClick={() => handleEditTask(index)} className="edit-button">
                Edit
              </button>
              <button onClick={() => handleDeleteTask(index)} className="delete-button">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddAndDelete;