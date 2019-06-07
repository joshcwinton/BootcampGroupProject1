import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Campuses.css';
import CampusCard from './CampusCard.js';

class Campuses extends Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    console.log(this.props.campusArray);
    return(
      <div>
        {this.props.campusArray.map(campus => (<CampusCard name={campus.name} image={campus.image} population={campus.population} key={campus.name}/>))}
      </div>
    );
  }
}

Campuses.propTypes = {
  campusArray: PropTypes.arrayOf(PropTypes.object)
}

export default Campuses;
