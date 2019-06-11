import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CampusCard.css';
import axios from 'axios';

class CampusCard extends Component {
  handleDelete = () => {
    axios.delete('/campuses/delete/'+this.props.name)
      .then((res) => console.log(res.data))
    // window.location.href = "http://localhost:3001/campuses";
  }

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
          <Link to="/editcampus">edit</Link>
          <button type="button" onClick={this.handleDelete}>delete</button>
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
