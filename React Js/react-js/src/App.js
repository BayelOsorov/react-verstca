import React from 'react';
import './App.css';
import TodoContextProvider from './context/TodoContext';
import Routes from './Routes';

function App() {

  return (
    <>
      <TodoContextProvider>
        <Routes />

      </TodoContextProvider>
    </>
  );
}

export default App;
