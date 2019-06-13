import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Students from './components/Students'
import Campuses from './components/Campuses'
import NewStudent from './components/NewStudentForm'
import NewCampus from './components/NewCampusForm'
import EditStudent from './components/EditStudentForm'
import EditCampus from './components/EditCampusForm'
import StudentSingleView from './components/StudentSingleView.js'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [{}],
      campuses: [{}]
    };

    this.getCampusArray = this.getCampusArray.bind(this);
    this.getStudentArray = this.getStudentArray.bind(this);
  }

  componentDidMount(){
    this.getCampusArray();
    this.getStudentArray();
  }

  // Fetch data from database
  getCampusArray(){
    console.log("Fetching campuses from backend.")
      axios.get('/campuses')
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        this.setState((state, props) => {return {campuses: res}});
      })
  };

  // Fetch data from database
  getStudentArray(){
    console.log("Fetching students from database.")
    axios.get('/students')
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        this.setState((state, props) => {return {students: res}});
      })
  };

  render() {
    const HomeComponent = () => (<Home />);
    const StudentsComponent = () => (<Students studentsArray={this.state.students}/> );
    const CampusesComponent = () => (<Campuses campusArray={this.state.campuses} />);
    const NewStudentComponent = () => (<NewStudent newStudent/> )
    const NewCampusComponent = () => (<NewCampus newCampus/> )
    const EditStudentComponent = () => (<EditStudent editStudent/> )
    const EditCampusComponent = () => (<EditCampus editCampus/> )

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          [// all students]
          <Route exact path="/students" component={StudentsComponent}/>
          [// all campuses]
          <Route exact path="/campuses" component={CampusesComponent}/>
          <Route path="/newstudent" component={NewStudentComponent}/>
          <Route path="/newcampus" component={NewCampusComponent}/>
          <Route path="/editstudent/:id" component={EditStudentComponent}/>
          <Route path="/editcampus/:id" component={EditCampusComponent}/>
          <Route path="/students/:id" component={StudentSingleView}/>
          {// <Route path="/campuses/:id" component={CampusSingleView}/>}
        }
        </Switch>
      </Router>
    );
  }
}

export default App;
