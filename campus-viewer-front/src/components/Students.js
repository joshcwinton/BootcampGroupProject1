import React, {Component} from 'react';
import './Students.css'
import {Link} from 'react-router-dom';
/***/
/***/

class Students extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    students:["Belinda", "Josh", "Stephen"]
  }

  /* add code here later
  componentDidMount()
  {
    // dummy array for now
    let arr = ["Belinda", "Josh", "Stephen"];
    this.setState = {
        students: arr
    }
  }
  */

  render() {
    return(
      <div>
        <h1>Students</h1>
        <Link to="/">Home</Link>
      <ul>
        {this.state.students.map(
          element =>
            <li>Student name: {element}</li>
        )}
      </ul>

        <Link to="/newstudent">
          <button type="button">
            Add Student
          </button>
        </Link>

        <Link to="/editstudent">
          <button type="button">
            Edit Student
          </button>
        </Link>

      </div>
    );
  }
}

export default Students;
