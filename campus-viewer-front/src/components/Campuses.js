import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return (
      <div>
        <h1>Campuses</h1>
          <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Campuses;
