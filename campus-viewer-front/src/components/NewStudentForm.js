import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NewStudent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          student_name: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


// set local name of student
  handleChange = (event) => {
    this.setState ({
      student_name: event.target.value
    })
  }

// update store array of students
  handleSubmit = () => {
    //this.props.addStudent(this.state.)
  }

  render() {
    return (
      <div>
        <header>New Student Form</header>
        <div className="nav">
        <Link to="/">Home</Link>
        {/*
        <Link to="/students">Students</Link>
        <Link to="/campuses">Campuses</Link>
        */}
        </div>
        <form>
            <label>
              Student Name
            </label>
          <br />
            <input type="text" onChange={this.handleChange} value={this.state.value} />
          <br />
            <button type="button" onClick={this.handleSubmit}>Add Student</button>
        </form>
      </div>
    );
  }
}

export default NewStudent;
