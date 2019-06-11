import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class EditStudent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          student_name: '',
          student_gpa: 0,
          student_url: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


// set local name of student
  handleChange = (event) => {
    /*
    let NAME = event.target.name
    let VALUE = event.target.value
    [name]: value

    if([name] == 'student_gpa')
      {
        Number.(event.target.value)
    }
    */
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
        <header>Edit Student</header>
          <div className="nav">


            <Link to="/" className='btn btn-primary'>Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/campuses">Campuses</Link>

          </div>
        <form>
          <label>
            Student Name:
          </label>
            <input type="text" name="student_name" onChange={this.handleChange} value={this.state.value} />
          <br />
          <label>
            GPA:
          </label>
            <input type="text" name="student_gpa" onChange={this.handleChange} value={this.state.value} />
          <br />
          <label>
            Student URL:
          </label>
            <input type="text" name="student_url" onChange={this.handleChange} value={this.state.value} />
          <br />
            <button type="button" onClick={this.handleSubmit}>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default EditStudent;
