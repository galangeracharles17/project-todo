import React from 'react';
import Header from '../Header';
import ToDoApp from '../ToDoApp';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='todo-wrapper'>
        <ToDoApp />
      </div>
    </div>
  );
}

export default App;
