import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return (
      <div>
        <h1>Students</h1>
          <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Students;
