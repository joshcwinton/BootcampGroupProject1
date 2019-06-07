import React from 'react';
import Campuses from './components/Campuses.js';
import './App.css';
// import { createStore } from 'redux';

// const store = createStore(campuses
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__());

let MyCampusArray = [
  {
    name: "Campus 1",
    image: "pic1.url",
    population: 3
  },
  {
    name: "Campus 2",
    image: "pic2.url",
    population: 5
  },{
    name: "Campus 3",
    image: "pic3.url",
    population: 7
  }
]

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
        <Campuses campusArray={MyCampusArray}/>
      </div>
    </div>
  );
}

export default App;
