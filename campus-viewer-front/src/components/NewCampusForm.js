import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCampusThunk } from '../reducers/index';

class NewCampus extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        location: '',
        description: '',
        image: '',
        population: 0
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

//
// set local name of campus
  handleChange = (event) => {
    this.setState ({
      name: document.getElementById('campus-name-box').value,
      location: document.getElementById('campus-location-box').value,
      description: document.getElementById('campus-description-box').value,
      image: document.getElementById('campus-image-box').value,
      population: document.getElementById('campus-population-box').value
    })
  }

// submits axios call add campus using this.state as object to add to redux store
// update store array of students
  handleSubmit = () => {
    this.props.addCampus(this.state)
  //  axios.post('/campuses', this.state)
  //    .then((res) => console.log(res.data))
    // window.location.href = "http://localhost:3001/campuses";
  }

  render() {
    return (
      <div>
        <h1>New Campus Form</h1>
        <div className="nav">
          <Link to="/" className='btn btn-primary'>Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/campuses">Campuses</Link>
        </div>
        <form>
          Campus Name: <input type="text" onChange={this.handleChange} value={this.state.name} id="campus-name-box"/><br />
          Campus Location: <input type="text" onChange={this.handleChange} value={this.state.location} id="campus-location-box"/><br />
          Campus Description: <input type="text" onChange={this.handleChange} value={this.state.description} id="campus-description-box"/><br />
          Campus Image URL: <input type="text" name="campus_image" onChange={this.handleChange} value={this.state.image} id="campus-image-box"/><br />
          Campus Population: <input type="text" name="campus_population" onChange={this.handleChange} value={this.state.population} id="campus-population-box" /><br />
          <button type="button" onClick={this.handleSubmit}>Add Campus</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus:(campus) => dispatch(addCampusThunk(campus))
  }
};

export default connect (null, mapDispatch)(NewCampus);
