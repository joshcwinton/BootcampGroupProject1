import {applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers} from "redux";
import axios from 'axios';
// action types

const ADD_STUDENT = "ADD_STUDENT";
const VIEW_ALL_STUDENTS = "VIEW_ALL_STUDENTS";
const REMOVE_STUDENT = "REMOVE_STUDENT";

//action creators

// newstudentform
const addStudent = (studentObject) =>
{
    return {
        type: ADD_STUDENT,
        studentObject
    }
}

// editstudentform
const removeStudent = (studentObject) =>
{
    return {
        type:REMOVE_STUDENT
    }
}

// students.js
const viewAllStudents = (students) =>
{
    return {
        type:VIEW_ALL_STUDENTS,
        students
    }
}

// Thunk Creators
export const addStudentsThunk = (student) => (dispatch) =>
{
    return axios.post('/newstudent/submit', student)
    .then((res) => console.log(res.data))
    .then(student => dispatch(addStudent(student)))
    .catch (err => console.log(err));
}

export const removeStudentThunk = () => (dispatch) =>
{
    // how to delete from database?
    // what to take in: just name of student?
     
}

export const viewStudentsThunk = () => (dispatch) =>
{
    // get all students from database
    // returns as objects to be used in students component?
}

export function studentReducer (state = {}, action)
{
    switch(action.type)
    {
        case ADD_STUDENT:
          return action.payload;
        case REMOVE_STUDENT:
          return {};
        case VIEW_ALL_STUDENTS:
          return action.payload; // not sure what the payload would be here
        default:
          return state;
      }
    }

const middleware = applyMiddleware(thunkMiddleware);
export const store = createStore(studentReducer,middleware);
console.log(store.getState());
