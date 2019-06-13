import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentCard from './StudentCard.js';
import './Students.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {viewStudentsThunk} from '../store.js';

class Students extends Component {
  componentDidMount(){
    // call viewStudents here
    this.props.viewStudents();
  }
  render() {
    return(
      <div>
        <h1>Students</h1>
        <Link to="/">Home</Link>
        <div>
          {this.props.studentsArray.map((student, index) => (<StudentCard name={student.name} id={student.id} gpa={student.gpa} image={student.image} campus={student.campus} key={index}/>))}
        </div>

        <Link to="/newstudent">
           <button type="button">
             Add Student
           </button>
         </Link>

      </div>
    );
  }
}

Students.propTypes = {
  studentsArray: PropTypes.arrayOf(PropTypes.object)
}

// Map state to props;
function mapState(props) {
  return {
  
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    viewStudents: () => dispatch(viewStudentsThunk())
  }
}
export default connect(mapState, mapDispatch)(Students);

