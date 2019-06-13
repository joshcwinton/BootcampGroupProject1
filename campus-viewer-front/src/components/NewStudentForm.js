import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class NewStudent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          gpa: undefined,
          image: '',
          campus: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  // Set state with data from boxes every time something is changed
  handleChange = (event) => {
    this.setState ({
      name: document.getElementById('student-name-box').value,
      gpa: document.getElementById('student-gpa-box').value,
      image: document.getElementById('student-image-box').value,
      campus: document.getElementById('student-campus-box').value
    })
  }

  // post state to database when submit button is clicked
  handleSubmit = () => {
    axios.post('/students', this.state)
      .then((res) => console.log(res.data))
  }

  render() {
    return (
      <div>
        <h1>New Student Form</h1>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/campuses">Campuses</Link>
        </div>
        <form>
            Student Name: <input type="text" onChange={this.handleChange} value={this.state.name} id="student-name-box"/><br />
            Student GPA: <input type="text" onChange={this.handleChange} value={this.state.gpa} id="student-gpa-box"/><br />
            Student Image URL: <input type="text" onChange={this.handleChange} value={this.state.image} id="student-image-box"/><br />
            Student Campus: <input type="text" onChange={this.handleChange} value={this.state.campus} id="student-campus-box"/><br />
            <button type="button" onClick={this.handleSubmit}>Add Student</button>
        </form>
      </div>
    );
  }
}

export default NewStudent;
