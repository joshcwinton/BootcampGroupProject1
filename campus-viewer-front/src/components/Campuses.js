import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Campuses.css';
import CampusCard from './CampusCard.js';
import {Link} from 'react-router-dom';


class Campuses extends Component {
  render(){
    return(
      <div>
        <h1>Campuses</h1>
        <Link to="/">Home</Link>
        <div>
          {this.props.campusArray.map(campus => (<CampusCard name={campus.name} image={campus.image} population={campus.population} key={campus.name}/>))}
        </div>


        <Link to="/newcampus">
           <button type="button">
             Add Campus
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
