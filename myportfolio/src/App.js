import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
