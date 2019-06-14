import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CampusCard from './CampusCard';
import { connect } from 'react-redux';
import { fetchSingleCampusThunk } from '../reducers/index';

class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      id: 1
    }
  }
  componentDidMount = () => {
    console.log(this.state.id)
    this.props.fetchSingleCampus(this.state.id);
  }

  render() {
    console.log(this.props.singleCampus)
     let result = this.props.singleCampus[0];
    return (
      <div>
      <header>View Campus</header>
      <Link to="/">Home</Link>
      <CampusCard stuff={result}/>
      </div>

    );
  }
}

  const mapState = (state) => {
    return {
      singleCampus: state.singleCampus
    }
  }

  const mapDispatch = (dispatch) => {
    return {
    fetchSingleCampus:(id) => dispatch(fetchSingleCampusThunk(id))
  }
};

export default connect (mapState,mapDispatch)(SingleCampus);
