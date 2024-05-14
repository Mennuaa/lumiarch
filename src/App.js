import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
