import React from 'react';
import Task from './Task';

function TaskList({ tasks, completeTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          name={task.name}
          state={task.state}
          onDelete={deleteTask}
          onComplete={completeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
