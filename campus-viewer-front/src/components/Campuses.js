import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Campuses.css';
import CampusCard from './CampusCard.js';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllCampusesThunk } from '../reducers/index';

class Campuses extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render(){
     let result = this.props.allCampuses.map((obj) =>
        <CampusCard id={obj.id} name={obj.name} />);

    return (
      <div>
        <h1>View Campuses</h1>
        <Link to="/">Home</Link>

        {result}

        <Link to="/newcampus">
        <button type="button">Add Campus</button>
      </Link>
      </div>
    );
  }
}

// maps state to var
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses
  }
}
// maps function params to dispatch call
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses:() => dispatch(fetchAllCampusesThunk())
  }
};


export default connect(mapState,mapDispatch)(Campuses);
