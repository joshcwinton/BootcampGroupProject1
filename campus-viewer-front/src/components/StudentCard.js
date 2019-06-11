import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CampusCard.css';

class StudentCard extends Component {
  render(){
    return(
      <div className="campus-card">
        <img className="image" src={this.props.image} alt=""/>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>ID: {this.props.id}</li>
        </ul>
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
