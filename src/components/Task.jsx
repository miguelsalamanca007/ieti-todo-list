import React, { useState } from 'react';

const Task = ({ name, state, onDelete, onUpdate }) => {
  const [isChecked, setIsChecked] = useState(state === 'Completada');

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`task ${isChecked ? 'completed' : ''}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <span className="task-name">{name}</span>
      </label>
      <span className="task-state">{isChecked ? 'Completada' : 'Pendiente'}</span>
      <button onClick={() => onDelete(name)}>Eliminar</button>
      <button onClick={() => onUpdate(name)}>Actualizar</button>
    </div>
  );
};

export default Task;
