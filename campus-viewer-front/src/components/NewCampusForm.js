import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class NewCampus extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        image: '',
        population: 0
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

//
// set local name of student
  handleChange = (event) => {
    this.setState ({
      name: document.getElementById('campus-name-box').value,
      image: document.getElementById('campus-image-box').value,
      population: document.getElementById('campus-population-box').value
    })
  }

// update store array of students
  handleSubmit = () => {
    axios.post('/newcampus/submit', this.state)
      .then((res) => console.log(res.data))
    // window.location.href = "http://localhost:3001/campuses";
  }

  render() {
    return (
      <div>
        <header>New Campus Form</header>
          <div className="nav">

            <Link to="/" className='btn btn-primary'>Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/campuses">Campuses</Link>

          </div>
        <form>
          Campus Name: <input type="text" onChange={this.handleChange} value={this.state.name} id="campus-name-box"/><br />
          Campus Image URL: <input type="text" name="campus_location" onChange={this.handleChange} value={this.state.image} id="campus-image-box"/><br />
          Campus Population: <input type="text" name="campus_population" onChange={this.handleChange} value={this.state.population} id="campus-population-box" /><br />
          <button type="button" onClick={this.handleSubmit}>Add Campus</button>
        </form>
      </div>
    );
  }
}

export default NewCampus;
