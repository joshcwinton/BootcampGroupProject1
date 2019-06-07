import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
/***/
import Students from './components/Students'
import Campuses from './components/Campuses'
/***/


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

    const CampusesComponent = () => (<Campuses allCampuses />)

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
        // all students
          <Route exact path="/students" component={StudentsComponent}/>
        // all campuses
          <Route exact path="/campuses" component={CampusesComponent}/>
        </Switch>
      </Router>
      );
    }
}

export default App;
