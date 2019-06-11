import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/***/
import Home from './components/Home'
import Students from './components/Students'
import Campuses from './components/Campuses'
import NewStudent from './components/NewStudentForm'
import NewCampus from './components/NewCampusForm'
import EditStudent from './components/EditStudentForm'
import EditCampus from './components/EditCampusForm'
/***/

let campusArray=[
  {
    name: "Campus 1",
    image: "campus1.jpg",
    population: 1
  },
  {
    name: "Campus 2",
    image: "campus2.jpg",
    population: 2
  },
  {
    name: "Campus 3",
    image: "campus3.jpg",
    population: 2
  },

]
class App extends Component {
  constructor() {
    super();

    this.state = {
      students: {

      },
      campuses: {

      }
    }
  }

  render() {

    const HomeComponent = () => (<Home />);

    const StudentsComponent = () => (<Students allStudents/> )

    const CampusesComponent = () => (<Campuses campusArray={campusArray} />)

    const NewStudentComponent = () => (<NewStudent newStudent/> )

    const NewCampusComponent = () => (<NewCampus newCampus/> )

    const EditStudentComponent = () => (<EditStudent editStudent/> )

    const EditCampusComponent = () => (<EditCampus editCampus/> )

    return (
      <Router>
        <Switch>
          {/* Home
            link to all campuses, all students */}
          <Route exact path="/" component={HomeComponent}/>

          {/*all students
            displays students*/}
          <Route path="/students" component={StudentsComponent}/>

          {/* all campuses
            displays campuses, add student */}
          <Route path="/campuses" component={CampusesComponent}/>

          <Route path="/newstudent" component={NewStudentComponent}/>

          <Route path="/newcampus" component={NewCampusComponent}/>

          <Route path="/editstudent" component={EditStudentComponent}/>

          <Route path="/editcampus" component={EditCampusComponent}/>



        </Switch>
      </Router>
      );
    }
}

export default App;
