import React from 'react';
import Task from './Task';

function TaskList(props) {
  const { tasks } = props;

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} name={task.name} state={task.state} />
      ))}
    </div>
  );
}

export default TaskList;
