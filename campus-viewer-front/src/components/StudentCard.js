import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CampusCard.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class StudentCard extends Component {
  // Called when delete button is clicked, sends HTTP delete to backend
  handleDelete = () => {
    console.log(`Deleting student named ${this.props.name}.`);
    axios.delete('/students/'+this.props.id)
      .then((res) => console.log(res.data))
  }

  render(){
    return(
      <div className="campus-card">
        <img className="image" src={this.props.image} alt=""/>
        <ul>
          <Link to={`/students/${this.props.id}`}> {this.props.name}</Link>
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

export default StudentCard;
