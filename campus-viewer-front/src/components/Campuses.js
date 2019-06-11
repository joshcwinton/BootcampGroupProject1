import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Campuses.css';
import {Link} from 'react-router-dom';
/***/
import CampusCard from './CampusCard.js';
/***/



class Campuses extends Component {
  render(){
    return(
      <div>
        <h1>Campuses</h1>
        <Link to="/">Home</Link>
        <div>
          {this.props.campusArray.map(campus => (<CampusCard name={campus.name} image={campus.image} population={campus.population} key={campus.name}/>))}
        </div>

        <Link to="/campuses/newcampus">
          <button type="button">
            Add Campus
          </button>
        </Link>

        <Link to="/campuses/editcampus">
          <button type="button">
            Edit Campus
          </button>
        </Link>

      </div>
    );
  }
}


Campuses.propTypes = {
  campusArray: PropTypes.arrayOf(PropTypes.object)
}

export default Campuses;
