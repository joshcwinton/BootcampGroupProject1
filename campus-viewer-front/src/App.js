import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="title">Campus Listing</h1>
      <div id="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Campuses</a></li>
          <li><a href="#">Students</a></li>
        </ul>
      </div>
      <br />
      <div id="campuses">
        <h2 id="campusHeading">All Campuses</h2>
      </div>
    </div>
  );
}

export default App;
