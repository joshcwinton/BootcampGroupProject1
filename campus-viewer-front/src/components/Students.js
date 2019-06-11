import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentCard from './StudentCard.js';
import './Students.css';
import { Link } from 'react-router-dom';

class Students extends Component {
  render() {
    return(
      <div>
        <h1>Students</h1>
        <Link to="/">Home</Link>
      <ul>
      <div>
        {this.props.studentsArray.map(student => (<StudentCard name={student.name} id={student.id}/>))}
      </div>
      </ul>

        <Link to="/newstudent">
          <button type="button">
            Add Student
          </button>
        </Link>

        <Link to="/editstudent">
          <button type="button">
            Edit Student
          </button>
        </Link>

      </div>
    );
  }
}

Students.propTypes = {
  studentsArray: PropTypes.arrayOf(PropTypes.object)
}

export default Students;
