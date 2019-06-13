// EditCampusForm.js
// Component for editing campus info
// Reached from Campuses.js
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';

class EditCampus extends Component {
  // loads state with only id from navigation path
  // data is immediately populated when component loads
  constructor(props) {
      super(props);
      this.state = {
          id: this.props.match.params.id,
          name: undefined,
          location: undefined,
          image: undefined,
          description: undefined,
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


  // Set local state of campus when text inside box is changed
  handleChange = () => {
    this.setState ({
      id: this.props.match.params.id,
      name: document.getElementById('campus-name-box').value,
      location: document.getElementById('campus-location-box').value,
      image: document.getElementById('campus-url-box').value,
      description: document.getElementById('campus-description-box').value
    })
    console.log(this.state)
  }

  // Update database with new data from this.state
  handleSubmit = () => {
    console.log("Attempting to submit campus with id: " + this.state.id);
    axios.put('/campuses/'+this.props.match.params.id, this.state)
      .then((res) => console.log(res.data))
  }

  // Gets fresh data from database
  componentDidMount(){
    axios.get('/campuses/'+this.props.match.params.id)
      .then((res) => this.setState(res.data[0]));
  }

  render() {
    return (
      <div>
        <h1>Edit Campus</h1>
        <div className="nav">
          <Link to="/">Back</Link>
        </div>
        <form>
          Campus Name:<input type="text" id="campus-name-box" onChange={this.handleChange} value={this.state.name} /><br />
          Campus Location:<input type="text" id="campus-location-box" onChange={this.handleChange} value={this.state.location} /><br />
          Campus Image URL:<input type="text" id="campus-url-box" onChange={this.handleChange} value={this.state.image} /><br />
          Campus Description:<input type="text" id="campus-description-box" onChange={this.handleChange} value={this.state.description} /><br />
          <button type="button" onClick={this.handleSubmit}>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditCampus);
