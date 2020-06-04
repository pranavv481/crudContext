import React from 'react';
import './Style/App.css';
import TodoProvider, { TodoContext } from './Context/TodoProvider';
import Todos from './Component/Todos';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Todos />
      </div>
    </TodoProvider>
  );
}

export default App;
