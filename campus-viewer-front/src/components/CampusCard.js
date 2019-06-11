import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CampusCard.css';

class CampusCard extends Component {
  render(){
    return(
      <div className="campus-card">
        <img src="" alt="" className="image" />
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Image: {this.props.image}</li>
          <li>Students: {this.props.population}</li>
        </ul>
        <div className="card-bar">
          <Link to="/">edit</Link>
          <Link to="/">delete</Link>
        </div>
      </div>
    );
  }
}

CampusCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  population: PropTypes.number
}

export default CampusCard;
