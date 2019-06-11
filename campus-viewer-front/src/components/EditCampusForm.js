import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class EditCampus extends Component {
  constructor(props) {
      super(props);
      this.state = {
          campus_name: '',
          campus_location: 0,
          campus_image_url: '',
          campus_description: ''
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
        <header>Edit Campus</header>
          <div className="nav">

            <Link to="/" className='btn btn-primary'>Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/campuses">Campuses</Link>

          </div>
        <form>
            <label>
              Campus Name:
            </label>
              <input type="text" name="campus_name" onChange={this.handleChange} value={this.state.value} />
          <br />
            <label>
              Campus Location:
            </label>
              <input type="text" name="campus_location" onChange={this.handleChange} value={this.state.value} />
          <br />
            <label>
              Campus Image URL:
            </label>
              <input type="text" name="campus_image_url" onChange={this.handleChange} value={this.state.value} />
          <br />
            <label>
              Campus Description:
            </label>
              <input type="text" name="campus_description" onChange={this.handleChange} value={this.state.value} />
          <br />
            <button type="button" onClick={this.handleSubmit}>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default EditCampus;
