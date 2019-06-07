import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
/***/
import Students from './components/Students'
import Campuses from './components/Campuses'
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

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
        [// all students]
          <Route exact path="/students" component={StudentsComponent}/>
        [// all campuses]
          <Route exact path="/campuses" component={CampusesComponent}/>
        </Switch>
      </Router>
      );
    }
}

export default App;
