import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const completeTask = (taskName) => {
    const updatedTasks = tasks.map((task) => {
      if (task.name === taskName) {
        return { ...task, state: 'Completada' };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const addTask = () => {
    if (newTask.trim() === '') {
      return;
    }
    const taskToAdd = { name: newTask, state: 'Pendiente' };
    const updatedTasks = [...tasks, taskToAdd];
    setTasks(updatedTasks);
    setNewTask('');
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <Header />
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar Tarea</button>
      </div>
      <TaskList tasks={tasks} completeTask={completeTask} />
    </div>
  );
}

export default App;
