import axios from 'axios';

// action types
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";
const FETCH_SINGLE_CAMPUS = 'FETCH_SINGLE_CAMPUS';


// action creators
const fetchAllCampuses = (campuses) => {
  return {
    type:FETCH_ALL_CAMPUSES,
    payload:campuses
  };
}

const fetchSingleCampus = (campus) => {
  return {
    type:FETCH_SINGLE_CAMPUS,
    payload: campus
  };
}

// thunk creators
export const fetchAllCampusesThunk = () => (dispatch) => {
  return axios
    .get(`http://localhost:3000/campuses`)
    .then(res => res.data)
    .then(campuses => dispatch(fetchAllCampuses(campuses)))
    .catch(err => console.log(err));
}

export const fetchSingleCampusThunk = (id) => (dispatch) => {
  console.log(id)
  let query = `http://localhost:3000/campuses/` + id;
  console.log(query)
  return axios
    .get(query)
    .then(res => res.data)
    .then(campus => dispatch(fetchSingleCampus(campus)))
    .catch(err => console.log(err));
}

export const deleteCampusThunk = (id) => (dispatch) => {
  return axios
    .delete('/campuses/'+id)
    .catch(err => console.log(err));;
}

export const addCampusThunk = (campus) => (dispatch) => {
  return axios
    .post('/campuses', campus)
    .catch(err => console.log(err));;
}

// reducer
export function allCampuses(state = [], action) {
  switch(action.type) {
    case FETCH_ALL_CAMPUSES:{
      console.log(action.payload)
      return action.payload;}
    default:
      return state;
  }
}

export function singleCampus(state = {}, action) {
  switch(action.type) {
  case FETCH_SINGLE_CAMPUS:
  console.log(action.payload)
    return action.payload
    default:
      return state;
  }
}




// specifies key for redux store
//export default as allCampuses;
