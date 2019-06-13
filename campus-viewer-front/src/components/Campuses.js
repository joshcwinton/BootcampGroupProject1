import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Campuses.css';
import CampusCard from './CampusCard.js';
import {Link} from 'react-router-dom';

// Handles rendering for all Campuses
// Has array of campuses passed to it and maps each campus to a campus card
class Campuses extends Component {
  render(){
    console.log(this.props.campusArray)
    return(
      <div>
        <h1>Campuses</h1>
        <Link to="/">Home</Link>
        <div>
          {this.props.campusArray.map((campus, index) => (<CampusCard name={campus.name} id={campus.id} image={campus.image} location={campus.location} description={campus.description} population={campus.population} key={index}/>))}
        </div>

        <Link to="/newcampus">
          <button type="button">Add Campus</button>
        </Link>
      </div>
    );
  }
}

Campuses.propTypes = {
  campusArray: PropTypes.arrayOf(PropTypes.object)
}

export default Campuses;
