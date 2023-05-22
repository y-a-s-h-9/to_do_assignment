import React, { useState, useEffect } from 'react';
import TodoRow from './TodoRow';
import './App.css'; // Import the external CSS file

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
       <br></br><br></br>
      <center><h2>TODO LIST</h2></center>
      <br></br>
      <div className="add-task">
        <br></br><br></br>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      {tasks.map((task, index) => (
        <TodoRow key={index} label={task} onDelete={() => handleDeleteTask(index)} />
      ))}
    </div>
  );
};

export default App;
