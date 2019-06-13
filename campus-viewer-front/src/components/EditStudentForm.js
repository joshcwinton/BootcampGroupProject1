// EditStudentForm.js
// Component for editing student info
// Reached from Students.js

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';


class EditStudent extends Component {
  // loads state with only id from navigation path
  // data is immediately populated when component loads
  constructor(props) {
      super(props);
      this.state = {
          id: this.props.match.params.id,
          name: null,
          gpa: null,
          image: null,
          campus: null,
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


  // Set local state of student when text inside box is changed
  handleChange = () => {
    this.setState ({
      id: this.props.match.params.id,
      name: document.getElementById('student-name-box').value,
      gpa: document.getElementById('student-gpa-box').value,
      image: document.getElementById('student-url-box').value,
      campus: document.getElementById('student-campus-box').value,
    })
  }

  // Update database with new data from this.state
  handleSubmit = () => {
    axios.put('/students/'+this.props.match.params.id, this.state)
      .then((res) => console.log(res.data))
  }

  // Gets fresh data from database
  componentDidMount(){
    axios.get('/students/'+this.props.match.params.id)
      .then((res) => this.setState(res.data[0]));
  }

  render() {
    return (
      <div>
        <h1>Edit Student</h1>
        <div className="nav">
          <Link to="/students">Back</Link>
        </div>
        <form>
          Student Name:<input type="text" id="student-name-box" onChange={this.handleChange} value={this.state.name} /><br />
          GPA:<input type="text" id="student-gpa-box" onChange={this.handleChange} value={this.state.gpa} /><br />
          Campus:<input type="text" id="student-campus-box" onChange={this.handleChange} value={this.state.campus} /><br />
          Student Image URL:<input type="text" id="student-url-box" onChange={this.handleChange} value={this.state.image} /><br />
          <button type="button" onClick={this.handleSubmit}>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditStudent);
