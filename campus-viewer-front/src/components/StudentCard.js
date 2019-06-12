import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CampusCard.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class StudentCard extends Component {
  handleDelete = () => {
    console.log(this.props.name);
    axios.delete('/students/'+this.props.name)
      .then((res) => console.log(res.data))
  }

  render(){
    return(
      <div className="campus-card">
        <img className="image" src={this.props.image} alt=""/>
        <ul>
          <li key={this.props.name}>Name: {this.props.name}</li>
          <li key={this.props.name}>GPA: {this.props.gpa}</li>
          <li key={this.props.name}>Campus: {this.props.campus}</li>
        </ul>
        <div className="card-bar">
          <Link to="/editstudent">edit</Link>
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
