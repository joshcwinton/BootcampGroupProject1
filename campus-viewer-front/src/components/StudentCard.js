import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CampusCard.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {removeStudentThunk} from '../store.js';

class StudentCard extends Component {
  handleDelete = () => {
    this.props.removeStudent(this.props.name);
    /*
    console.log(this.props.name);
    axios.delete('/students/'+this.props.name)
      .then((res) => console.log(res.data))
    */
  }

  render(){
    return(
      <div className="campus-card">
        <img className="image" src={this.props.image} alt=""/>
        <ul>
          <li key="name">Name: {this.props.name}</li>
          <li key="gpa">GPA: {this.props.gpa}</li>
          <li key="campus">Campus: {this.props.campus}</li>
        </ul>
        <div className="card-bar">
          <Link to={`/editstudent/${this.props.id}`}>edit</Link>
          <button type="button" onClick={this.handleDelete}>delete</button>
        </div>
      </div>
    );
  }
}

StudentCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
}

// map state to props
function mapState(props) {
  return {
      
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    removeStudent: (student) => dispatch(removeStudentThunk(student))
  }
}
export default connect(/*mapState*/null, mapDispatch)(StudentCard);
