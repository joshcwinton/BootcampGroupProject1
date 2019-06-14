import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CampusCard from './CampusCard';
import { connect } from 'react-redux';
import { fetchAllCampusesThunk } from '../reducers/index';


class AllCampuses extends Component {


  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render(){
     let result = this.props.allCampuses.map((obj) =>
        <CampusCard name={obj.name}/>);

    return (
      <div>
        <header>View Campuses</header>
        <Link to="/">Home</Link>

        {result}
      </div>
    );
  }
}


// maps state to var
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses
  }
}
// maps function params to dispatch call
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses:() => dispatch(fetchAllCampusesThunk())
  }
};


export default connect(mapState,mapDispatch)(AllCampuses);
