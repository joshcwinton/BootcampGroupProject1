import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/campuses">Campuses</Link>
      </div>
    );
  }
}

export default Home;
