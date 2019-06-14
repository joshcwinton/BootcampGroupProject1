import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CampusCard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteCampusThunk } from '../reducers/index';


class CampusCard extends Component {
  constructor(props){
    //console.log(props.stuff)
    super(props);
    this.state = {
      id: this.props.location
    }
  }

// deletes campus via redux thunk
  handleDelete = () => {
    this.props.deleteCampus(this.props.id);
  }

  render(){
    console.log("Here", this.props)
    return(
      <div className="campus-card">
        <img src={this.props.image} alt="" className="image" />
        <ul>
          <Link to={{
            pathname:`/campuses/${this.props.id}`,
          state: {
            id:this.props.id}
          }}>{this.props.name}</Link>
        {/*  <li key="location">Location: {this.props.location}</li> */}
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

  const mapDispatch = (dispatch) => {
    return {
      deleteCampus:(id) => dispatch(deleteCampusThunk(id))
    }
  };

export default connect (null, mapDispatch)(CampusCard);
