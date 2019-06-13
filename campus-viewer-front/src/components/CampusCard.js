import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CampusCard.css';
import axios from 'axios';

class CampusCard extends Component {
  handleDelete = () => {
    console.log(this.props.name);
    axios.delete('/campuses/'+this.props.name)
      .then((res) => console.log(res.data))
  }

  render(){
    console.log(this.props.id)
    return(
      <div className="campus-card">
        <img src={this.props.image} alt="" className="image" />
        <ul>
          <Link to="/campuses/">{this.props.name}</Link>
          <li key="location">Location: {this.props.location}</li>
          <li key="population">Students: {this.props.population}</li>
          <li key="description">Description: {this.props.description}</li>
        </ul>
        <div className="card-bar">
          <Link to={`/editcampus/${this.props.id}`}>edit</Link>
          <button type="button" onClick={this.handleDelete}>delete</button>
        </div>
      </div>
    );
  }
}

CampusCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  population: PropTypes.number
}

export default CampusCard;
