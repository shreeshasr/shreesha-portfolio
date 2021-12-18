
import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
