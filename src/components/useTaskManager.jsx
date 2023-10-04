import { useState } from 'react';

function useTaskManager(initialTasks = []) {
  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (newTask) => {
    if (newTask.trim() === '') {
      return;
    }
    const taskToAdd = { name: newTask, state: 'Pendiente' };
    setTasks((prevTasks) => [...prevTasks, taskToAdd]);
  };

  const deleteTask = (taskName) => {
    const updatedTasks = tasks.filter((task) => task.name !== taskName);
    setTasks(updatedTasks);
  };

  const updateTask = (taskName, newState) => {
    const updatedTasks = tasks.map((task) => {
      if (task.name === taskName) {
        return { ...task, state: newState };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return { tasks, createTask, deleteTask, updateTask };
}

export default useTaskManager;
