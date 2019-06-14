import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Students from './components/Students'
import Campuses from './components/Campuses'
import NewStudent from './components/NewStudentForm'
import NewCampus from './components/NewCampusForm'
import EditStudent from './components/EditStudentForm'
import EditCampus from './components/EditCampusForm'
import AllCampuses from './components/AllCampuses'
import SingleCampus from './components/SingleCampus'
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

  getCampusArray(){
    axios.get('/campuses')
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        this.setState((state, props) => {return {campuses: res}});
      })
  };

  getStudentArray(){
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
    const AllCampusesComponent = () => (<AllCampuses campusView/>)
    const SingleCampusComponent = () => (<SingleCampus campusView/>)

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

          <Route path="/allcampuses" component={AllCampusesComponent}/>

          <Route path="/campuses/:id" component={SingleCampusComponent}/>
        </Switch>
      </Router>
      );
    }
}

export default App;
