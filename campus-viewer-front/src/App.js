import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Campuses from './components/Campuses';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [{

      }],
      campuses: [
          {}
      ]
    };

    this.getCampusArray = this.getCampusArray.bind(this);
  }

  componentDidMount(){
    this.getCampusArray();
    this.getStudentArray();
  }

  getCampusArray(){
    axios.get('/data/campuses')
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        this.setState((state, props) => {return {campuses: res}});
      })
  };

  getStudentArray(){
    axios.get('/data/students')
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
