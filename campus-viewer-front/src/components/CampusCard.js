import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CampusCard.css';

class CampusCard extends Component {
  render(){
    return(
      <div className="campus-card">
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Image: {this.props.image}</li>
          <li>Students: {this.props.population}</li>
        </ul>
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
