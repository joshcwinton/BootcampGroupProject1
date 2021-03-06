import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class NewCampus extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        location: '',
        description: '',
        image: '',
        population: 0,
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  // Set local state each time text is changed
  handleChange = () => {
    this.setState ({
      name: document.getElementById('campus-name-box').value,
      location: document.getElementById('campus-location-box').value,
      description: document.getElementById('campus-description-box').value,
      image: document.getElementById('campus-image-box').value,
      population: document.getElementById('campus-population-box').value
    })
  }

  // Post data from state to database
  handleSubmit = () => {
    axios.post('/campuses', this.state)
      .then((res) => console.log(res.data))
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

export default NewCampus;
