import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const tasks = [
    { name: 'Hacer front proyecto', state: 'Pendiente' },
    { name: 'Hacer taller ieti', state: 'Completada' },
    { name: 'Hacer BPM proyecto', state: 'Pendiente' },
  ];

  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
